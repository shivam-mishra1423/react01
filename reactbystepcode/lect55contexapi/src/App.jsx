import { useState } from "react";
import Collage from "./Collage";
import { SubjectContext } from "./ContextData";

function App() {
  const [subject, setSubject] = useState("English");

  return (
    <div style={{ backgroundColor: "yellow", padding: 10 }}>
      <SubjectContext.Provider value={subject}>
        <select
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
        >
          <option value="">Select Subject</option>
          <option value="Maths">Maths</option>
          <option value="History">History</option>
          <option value="English">English</option>
        </select>

        <Collage />
      </SubjectContext.Provider>
    </div>
  );
}

export default App;