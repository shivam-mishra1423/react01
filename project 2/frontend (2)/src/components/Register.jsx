import { useForm } from "react-hook-form";
import axios from "axios";
import "./Register.css";

function Register(){

  const { register, handleSubmit } = useForm();

const print = async(data) =>{
    const res = await axios.post("http://localhost:3005/api/auth/register",
        data
    );

    console.log(data);
}

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

        <button type="submit">Register</button>

        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  </div>
);
}

export default Register;