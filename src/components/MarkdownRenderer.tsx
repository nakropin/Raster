import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { firmen } from "../assets/data.json";

type Props = {
  className?: string;
  paragraphId: number;
  id: number;
};

function MarkdownParagraphRenderer({ className, paragraphId, id }: Props) {
  const [paragraph, setParagraph] = useState("");

  useEffect(() => {
    fetch("src/assets/anschreiben.md")
      .then((response) => response.text())
      .then((text) => {
        const paragraphs = text.split("\n\n");
        if (paragraphId >= 0 && paragraphId < paragraphs.length) {
          const selectedParagraph = paragraphs[paragraphId];
          const replacedText = selectedParagraph
            .replace("{{ANREDE}}", firmen[id].anrede)
            .replace("{{KONTAKTPERSON}}", firmen[id].kontaktperson)
            .replace("{{QUELLE}}", firmen[id].quelle)
            .replace("{{STELLE}}", firmen[id].stelle)
            .replace("{{ORT}}", firmen[id].ort);
          setParagraph(replacedText);
        } else {
          console.error("Paragraph ID out of range");
        }
      })
      .catch((error) => console.error("Error loading markdown:", error));
  }, []);

  return (
    <div className={className}>
      <ReactMarkdown>{paragraph}</ReactMarkdown>
    </div>
  );
}

export default MarkdownParagraphRenderer;
