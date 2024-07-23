import React, { useState } from "react";
import { register } from "./Server/authServer";
import "./App.css";
import { Link, useNavigate } from "react-router-dom";
import { notification } from "antd";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate(); // Move this line outside of the handlesubmit function

  const handlesubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
      name,
    };
    try {
      const res = await register(data);
      notification.success({
        message: "Information added",
        description: "You shot well",
      });
      console.log(res);
      setName("");
      setEmail("");
      setPassword("");
      navigate("/home"); // Now this works correctly
    } catch (error) {
      notification.error({
        message: error.response?.data?.message || "Registration failed",
        description: "An error occurred",
      });
      console.error("Error registering user:", error);
    }
    // window.location.reload();
  };

  return (
    <div className="register">
      <form onSubmit={handlesubmit}>
        <h1>SignUp</h1>
        <input
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
        />
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
          If you have a user <Link to="/login">Login</Link>
        </p>
      </form>
      <br />
    </div>
  );
};
