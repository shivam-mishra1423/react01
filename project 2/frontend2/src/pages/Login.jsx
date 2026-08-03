import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
//import "./Login.css";

function Login() {

    const navigate = useNavigate();

    const {

        register,

        handleSubmit,

        formState: { errors }

    } = useForm();

    const submit = async (data) => {

        try {

            const res = await API.post("/auth/login", data);

            localStorage.setItem("token", res.data.token);

            alert("Login Successful");

            navigate("/home");

        }

        catch (error) {

            alert(error.response?.data?.message || "Login Failed");

        }

    };

    return (

        <div className="login-container">

            <div className="login-box">

                <h1>Login</h1>

                <form onSubmit={handleSubmit(submit)}>

                    <input

                        type="email"

                        placeholder="Enter Email"

                        {...register("email", {

                            required: "Email Required"

                        })}

                    />

                    {errors.email && <p>{errors.email.message}</p>}

                    <input

                        type="password"

                        placeholder="Enter Password"

                        {...register("password", {

                            required: "Password Required"

                        })}

                    />

                    {errors.password && <p>{errors.password.message}</p>}

                    <button>

                        Login

                    </button>

                </form>

            </div>

        </div>

    );

}

export default Login;