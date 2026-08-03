import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

    return (

        <nav className="navbar">

            <h2>Contact Manager</h2>

            <div>

                <Link to="/home">Home</Link>

                <Link to="/register">Register</Link>

                <Link to="/login">Login</Link>

            </div>

        </nav>

    );

}

export default Navbar;