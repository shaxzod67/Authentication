import React, { useEffect, useState } from "react";
import { Register } from "./Register";

import { getToken, removeToken } from "./utils/localStore";

const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // console.log(getToken());
    setUser(getToken());
  }, [user,]);
  return (
    <div>
      {user && (
        <div>
          <b>User</b>
          <button
            onClick={() => {
              removeToken()
              setUser(null)
            }}
          >
            log out
          </button>
        </div>
      )}
      <div className="App">
        <h1>Authentication App</h1>
      </div>
      <Register />
    </div>
  );
};

export default App;
