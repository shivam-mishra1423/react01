import {useForm} from "react-hook-form"
import axios from "axios";
import "./Login.css";

function Login(){

    const{register, handleSubmit}= useForm();


    const print = async(data) =>{

        const res = await axios.post("http://localhost:3005/api/auth/login",
        data
    );
        alert("success login")
        console.log(data);
    }





 return (
  <div className="login-container">
    <div className="login-box">
      <h1>Login</h1>

      <form onSubmit={handleSubmit(print)}>
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