import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "./Register.css";

function Register() {

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    const print = async (data) => {

        console.log("Form Submitted");
        console.log(data);

        try {

            const response = await API.post("/auth/register", data);
            console.log(response);

            alert("User Registered Successfully");
            navigate("/login");

        } catch (error) {

            console.log(error);
            console.log(error.message);
            console.log(error.response);

            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Server not responding");
            }

        }

    };

    return (
        <div className="register-container">
            <div className="register-box">
                <h1>Register</h1>

                <form onSubmit={handleSubmit(print)}>

                    <input
                        type="text"
                        placeholder="Enter Name"
                        {...register("name")}
                    />

                    <input
                        type="email"
                        placeholder="Enter Email"
                        {...register("email")}
                    />

                    <input
                        type="password"
                        placeholder="Enter Password"
                        {...register("password")}
                    />

                    <button type="submit">
                        Register
                    </button>

                    <p>
                        Already have an account? <a href="/login">Login</a>
                    </p>

                </form>
            </div>
        </div>
    );
}

export default Register;