import { useState } from "react";
import "./App.css";
import TitleComponent from "./component/Title.tsx";
import Card from "./component/Card.tsx";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <>
      <TitleComponent />
      <Card></Card>
      <h1>咪咪貓貓</h1>
      <div className="card">
        <button onClick={() => setCount1((count1) => count1 + 1)}>
          Like {count1}
        </button>
        <button onClick={() => setCount2((count2) => count2 + 1)}>
          Like {count2}
        </button>
      </div>
      <p className="p">Welcome to 咪咪貓貓(=´ω`=)!!</p>
      <p className="read-the-docs">A place to share cute catsヽ(=^･ω･^=)丿</p>

      <div>
        <span>text</span>
        <span>text</span>
      </div>

      <div>
        <p>break line</p>
        <p>break line</p>
      </div>

      <span>text</span>
      <p>break line</p>
      <a href="/"></a>
      <h1>H1</h1>
      <h2>H2</h2>
      <button>button</button>
      <div></div>
    </>
  );
}
export default App;
