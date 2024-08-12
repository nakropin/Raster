import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { useReactToPrint } from "react-to-print";

const PrintWrapper = () => {
  const contentRef = React.useRef(null);
  const handlePrint = useReactToPrint({
    content: () => contentRef.current,
  });

  return (
    <div className="flex flex-row justify-between align-top">
      <div ref={contentRef}>
        <App />
      </div>
      <button className="bg-slate-200 p-4 mx-8 h-20" onClick={handlePrint}>
        Drucken
      </button>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PrintWrapper />
  </React.StrictMode>
);
