import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

    return (
        <nav>

            <Link to="/home">
                Home
            </Link>

            <Link to="/register">
                Register
            </Link>

            <Link to="/login">
                Login
            </Link>

        </nav>
    );
}

export default Navbar;