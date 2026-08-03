import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Student Management System</h2>

      <Link to="/">Home</Link>
      {" | "}
      <Link to="/form">Student Form</Link>
    </nav>
  );
}

export default Navbar;