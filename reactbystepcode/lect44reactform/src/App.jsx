import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function handle(e) {
    e.preventDefault();

    console.log(name);
    console.log(password);
  }

  return (
    <div>
      <h1>UseForm Status</h1>

      <form>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handle}>Submit</button>
      </form>
    </div>
  );
}

export default App;