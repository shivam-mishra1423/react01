import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "./Login.css";

function Login(){

const navigate = useNavigate();

    const{register, handleSubmit,formState: { errors }}= useForm();

const print = async (data) => {
    try {

        const response = await API.post("/auth/login", data);

        alert("Login Successfully");

        localStorage.setItem("token", response.data.token);

        navigate("/home");

    } catch (error) {
    console.log("Full Error:", error);
    console.log("Response:", error.response);
    console.log("Data:", error.response?.data);

    alert(error.response?.data?.message || "Login Failed");
}
};





 return (
  <div className="login-container">
    <div className="login-box">
      <h1>Login</h1>

      <form onSubmit={handleSubmit(print)}>
        <input
          type="email"
          placeholder="Enter Email"
          {...register("email",{
            required : "email is required"
          })}
        />

        <input
          type="password"
          placeholder="Enter Password"
          {...register("password",{ 
              required:"password is requre",
          })}
        />
  {errors.password && <p>{errors.password.message}</p>}
        <button type="submit">Login</button>

        <p>
          Don't have an account? <a href="/register">Register</a>
        </p>
      </form>
    </div>
  </div>
);

}

export default Login;