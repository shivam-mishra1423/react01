import Home from "./Home";
import About from "./About";
import Login from "./Login";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/login">Login</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;