import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function ClickEvent() {
  const [data, setData] = useState("");
  return (
    <div className="App">
      <h1>Test click event with button</h1>
      <button onClick={() => setData("updated successfully")}>
        Update data
      </button>
      <h1>{data}</h1>
    </div>
  );
}

export default ClickEvent;
