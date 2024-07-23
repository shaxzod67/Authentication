import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const handleClick = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div>
      <nav>
        <h1>Home</h1>
        <button onClick={handleClick}>Log Out</button>
      </nav>
    </div>
  );
}

export default Home;
