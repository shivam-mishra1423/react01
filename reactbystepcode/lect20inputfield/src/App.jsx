import { useState } from "react";

function App() {
  const [value1, setName] = useState("");
  const [value2, setValue] = useState("");

  const handle = () => {
    setName("");
    setValue("");
  };

  return (
    <div>
      <h1>React me Input Field</h1>

      <input
        type="text"
        placeholder="Enter your first name"
        value={value1}
        onChange={(event) => setName(event.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Enter your second name"
        value={value2}
        onChange={(event) => setValue(event.target.value)}
      />

      <h3>First Input: {value1}</h3>
      <h3>Second Input: {value2}</h3>

      <button onClick={handle}>Clear</button>
    </div>
  );
}

export default App;