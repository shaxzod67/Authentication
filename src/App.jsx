import React, { useEffect, useState } from "react";
import { Register } from "./Register";

import { getToken, removeToken } from "./utils/localStore";
import { Route, Routes } from "react-router-dom";
import Login from "./login";
import Home from "./Home";
import Profil from "./profil";
import Fullname from "./fullname";

const App = () => {
  // const [user, setUser] = useState(null);
  // useEffect(() => {
  //   // console.log(getToken());
  //   setUser(getToken());
  // }, [user]);

  return (
    <div>
      {/* {user && (
        <div>
          <b>User</b>
          <button
            onClick={() => {
              removeToken();
              setUser(null);
            }}
          >
            log out
          </button>
        </div>
      )} */}
      <div className="App"></div>

      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/fullname" element={<Fullname />} />
      </Routes>
    </div>
  );
};

export default App;
