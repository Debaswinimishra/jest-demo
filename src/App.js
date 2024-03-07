// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";

function App() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [resMult, setResMult] = useState("");

  const handleValue1Change = (event) => {
    setValue1(event.target.value);
  };

  const handleValue2Change = (event) => {
    setValue2(event.target.value);
  };

  const multiplyValues = () => {
    setResMult(parseFloat(value1) * parseFloat(value2));
    alert(resMult);
  };

  const handleAddClick = () => {
    const result = parseFloat(value1) + parseFloat(value2);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter value 1"
        value={value1}
        onChange={handleValue1Change}
      />

      <input
        type="text"
        placeholder="Enter value 2"
        value={value2}
        onChange={handleValue2Change}
      />
      <button onClick={multiplyValues}>Multiply</button>

      <button onClick={handleAddClick}>Add</button>
    </div>
  );
}

export default App;
