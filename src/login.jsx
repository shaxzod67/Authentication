import React, { useState } from "react";
import { login } from "./Server/authServer";
import { setToken } from "./utils/localStore";
import "./App.css";
import { Link, useNavigate } from "react-router-dom";
import { notification } from "antd";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Move this line inside the component

  const handlesubmit1 = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    try {
      const res = await login(data);
      setToken(res.token);
      console.log("Returned value:", res);
      setEmail("");
      setPassword("");
      navigate("/home");
    } catch (error) {
      notification.error({
        message: error.response?.data?.message || "Login failed",
        description: "An error occurred",
      });
      console.error("Error logging in user:", error);
    }
    // window.location.reload();
  };

  return (
    <div className="register">
      <form onSubmit={handlesubmit1}>
        <h1>Sign In</h1>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          name="password"
        />
        <button type="submit">Submit</button>
        <p>
          If you do not have a user <Link to="/">SignUp</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
