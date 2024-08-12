import "./App.css";
import Greeting from "./components/Greeting";
import Grid from "./components/Grid";
import MarkdownRenderer from "./components/MarkdownRenderer";

function App() {
  return (
    <Grid cols={4} rows={6} className="bg-black text-white">
      <div className="aspect-square object-cover h-full w-full relative col-span-2 row-span-3">
        <img
          className="rounded-3xl absolute inset-0 w-full h-full object-cover"
          src="./src/assets/potrait.jpg"
          alt="Portrait of Nikita Nakropin"
          id="portrait"
        />
        <div
          className={`absolute bottom-0 left-0 right-0 h-1/5 bg-gradient-to-t from-black to-transparent z-10 rounded-b-3xl`}
        ></div>
      </div>
      <Greeting id={1} />
      <MarkdownRenderer
        className="col-span-2 row-span-1 w-full h-full text-left text-md"
        id={1}
        paragraphId={0}
      />
      <div className="col-span-1 row-span-1"></div>

      <MarkdownRenderer
        className="col-span-2 row-span-2 w-full h-full text-left"
        id={1}
        paragraphId={1}
      />
      <MarkdownRenderer
        className="col-span-2 row-span-2 w-full h-full text-left"
        id={1}
        paragraphId={2}
      />
      <MarkdownRenderer
        className="col-span-4 row-span-1 w-full h-full text-left -row-start-2"
        id={1}
        paragraphId={3}
      />
      <MarkdownRenderer
        className="col-span-4 row-span-1 w-full h-full text-left -row-start-1"
        id={1}
        paragraphId={4}
      />
    </Grid>
  );
}

export default App;
