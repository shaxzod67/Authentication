import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { changePassword } from "./Server/authServer";
import { FaRegUserCircle } from "react-icons/fa";

function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const [oldPassword, setOldPasspord] = useState();
  const [newPassword, setNewPasspord] = useState();

  const handleChange = async (e) => {
    e.preventDefault();
    const data = {
      oldPassword,
      newPassword,
    };
    console.log(data);
    try {
      const changePss = await changePassword(data);
      console.log(changePss);
    } catch (error) {
      console.log("xato ozgarishda ", data);
    }
  };
  return (
    <div>
      <nav>
        <h1>Home</h1>
        <button onClick={handleClick}>Log Out</button>
        <Link to="/profil"><FaRegUserCircle /></Link>
      </nav>

      <form>
        <h2>Password change</h2>
        <input className="border border-black"
          type="text"
          placeholder="old password"
          value={oldPassword}
          onChange={(e) => setOldPasspord(e.target.value)}
        />
        <input className="border border-black"
          type="text"
          placeholder="new pasword"
          value={newPassword}
          onChange={(e) => setNewPasspord(e.target.value)}
        />
        <button className="border border-black ml-2 p-2 " onClick={handleChange}>Add</button>
      </form>
    </div>
  );
}

export default Home;
