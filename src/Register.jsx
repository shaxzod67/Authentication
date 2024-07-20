import React, { useState } from "react";
// import { Authcation } from "./Auth";
import { login, register } from "./Server/authServer";
import { setToken } from "./utils/localStore";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
      name,
    };
    try {
      const res = await register(data);
      console.log(res);
    } catch (error) {
      console.error("Error registering user:", error);
    }
    // window.location.reload();
  };
  const handlesubmit1 = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    try {
      const res = await login(data);
      setToken(res.token);
      console.log("qaytgan qiymat:", res);
    } catch (error) {
      console.error("Error registering user:", error);
    }
    // window.location.reload();
  };
  return (
    <>
      <form onSubmit={handlesubmit}>
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
          placeholder="Parol"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          name="password"
        />
        <button type="submit">Yuborish</button>
      </form>
      <br />
      <form onSubmit={handlesubmit1}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />
        <input
          type="password"
          placeholder="Parol"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          name="password"
        />
        <button type="submit">Yuborish</button>
      </form>
    </>
  );
};
