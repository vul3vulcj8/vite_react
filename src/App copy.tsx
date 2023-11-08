import { useState } from "react";
import reactLogo from "./3.jpg";
import viteLogo from "./9.jpg";
import "./App.css";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <>
      <div>
        <div>
          <div>img</div>
          <div>img</div>
        </div>
        <div>1212121</div>
        <div>
          <button>like</button>
          <button>like</button>
        </div>
      </div>
    </>
  );
}
export default App;
