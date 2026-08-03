import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
//import "./Register.css";

function Register() {

    const navigate = useNavigate();

    const {

        register,

        handleSubmit,

        formState: { errors }

    } = useForm();

    const submit = async (data) => {

        try {

            await API.post("/auth/register", data);

            alert("Registration Successful");

            navigate("/login");

        }

        catch (error) {

            alert(error.response?.data?.message);

        }

    };

    return (

        <div className="register-container">

            <div className="register-box">

                <h1>Register</h1>

                <form onSubmit={handleSubmit(submit)}>

                    <input

                        type="text"

                        placeholder="Enter Name"

                        {...register("name", {

                            required: "Name Required"

                        })}

                    />

                    {errors.name && <p>{errors.name.message}</p>}

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

                        Register

                    </button>

                </form>

            </div>

        </div>

    );

}

export default Register;