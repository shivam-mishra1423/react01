import Navbar from "./components/Navbar";
import Home from "./components/Home";
import StudentForm from "./components/StudentForm";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<StudentForm />} />
      </Routes>
    </>
  );
}

export default App;