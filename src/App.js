import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [v, setV] = useState("username");
  return (
    <div className="App">
      <p>hellow World</p>
      <h1>First test case</h1>
      <input
        type="text"
        placeholder="Enter user name"
        name="name"
        id="userid"
        value={v}
      ></input>
    </div>
  );
}

export default App;
