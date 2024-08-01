import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { changePassword } from "./Server/authServer";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // const [oldPassword, setOldPasspord] = useState();
  // const [newPassword, setNewPasspord] = useState();

  // const handleChange = async (e) => {
  //   e.preventDefault();
  //   const data = {
  //     oldPassword,
  //     newPassword,
  //   };
  //   console.log(data);
  //   try {
  //     const changePss = await changePassword(data);
  //     console.log(changePss);
  //   } catch (error) {
  //     console.log("xato ozgarishda ", data);
  //   }
  // };
  return (
    <div>
      <nav className="nav">
        <h1 className="text-white bg-blue-500 border-0 py-1 px-2.5 focus:outline-none rounded text-lg ml-2">
          Home
        </h1>
        <div>
          <button className="text-white bg-green-500 border-0 py-1 px-2 focus:outline-none hover:bg-green-600 rounded text-lg ml-2">
           <Link to="/services">Services</Link>
          </button>
          <button
            className="text-white bg-red-500 border-0 py-1 px-2 focus:outline-none hover:bg-red-600 rounded text-lg ml-2"
            onClick={handleClick}
          >
            Log Out
          </button>
          <Link to="/profil">
            <FaRegUserCircle />
          </Link>
        </div>
      </nav>

      {/* <form>
        <h2>Password change</h2>
        <input
          className="border border-black"
          type="text"
          placeholder="old password"
          value={oldPassword}
          onChange={(e) => setOldPasspord(e.target.value)}
        />
        <input
          className="border border-black"
          type="text"
          placeholder="new pasword"
          value={newPassword}
          onChange={(e) => setNewPasspord(e.target.value)}
        />
        <button
          className="border border-black ml-2 p-2 "
          onClick={handleChange}
        >
          Add
        </button>
      </form> */}
    </div>
  );
}

export default Home;
