import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function Onchange() {
  const [data, setData] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter user name"
        name="name"
        id="userid"
        value={data}
        onChange={(e) => setData(e.target.value + "testabc")}
      ></input>
    </div>
  );
}

export default Onchange;
