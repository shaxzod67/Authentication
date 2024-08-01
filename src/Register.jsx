import React, { useState } from "react";
import { register } from "./Server/authServer";
import "./App.css";
import { Link, useNavigate } from "react-router-dom";
import { notification } from "antd";
import { setToken } from "./utils/localStore";

export const Register = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate(); // Move this line outside of the handlesubmit function

  const handlesubmit = async (e) => {
    e.preventDefault();
    const data = {
      username,
      password,
    };
    console.log(data);
    try {
      const res = await register(data);
      notification.success({
        message: "Information added",
        description: "You shot well",
      });
      console.log(res);
      const token = res.token;
      console.log(token);
      setToken(token);
      setUsername("");
      setPassword("");
      navigate("/home"); // Now this works correctly
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        notification.error({
          message: error.response.data.message,
          description: "An error occurred",
        });
        console.log("xatoo", error.response.data.message);
      } else {
        console.error("Error registering user:", error);
      }
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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="username"
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
