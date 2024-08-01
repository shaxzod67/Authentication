// App.jsx
import React from "react";
import { Register } from "./Register";
import { Route, Routes } from "react-router-dom";
import Login from "./login";
import Home from "./Home";
import Profil from "./profil";
import Fullname from "./fullname";
import Edit from "./edit";
import Services from "./utils/services";
import GetDataServices from "./getDataServices"; // Correct import

const App = () => {
  return (
    <div>
      <div className="App"></div>

      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/fullname" element={<Fullname />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/services" element={<Services />} />
        <Route path="/getDataServices" element={<GetDataServices />} />
      </Routes>
    </div>
  );
};

export default App;
