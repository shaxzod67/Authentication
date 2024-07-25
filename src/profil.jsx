// // Profil.jsx
// import React, { useEffect, useState } from "react";
// import { profil } from "./Server/authServer";

import { useEffect, useState } from "react";
import { profil } from "./Server/authServer";

// function Profil() {
//   const [username, setUsername] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await profil();
//         setUsername(data.username);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData()
//   }, []);
//   console.log(username);

//   return (
//     <div className="profil">
//       <p>Lorem ipsum dolor sit amet.</p>
//       <h2>{username}</h2>
//     </div>
//   );
// }

// export default Profil;

// const [username, setUsername] = useState("");

// useEffect(() => {
//   const fetchProfile = async () => {
//     try {
//       const data = await profil();
//       setUsername(data.username);
//       console.log(data.username);
//     } catch (error) {
//       console.error("Error fetching profile data:", error);
//     }
//   };

//   fetchProfile();
// }, []);

function Profil() {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const baza = await profil();
        setData(baza);
        console.log(baza.username);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="profil">
      <h2>{data?.name}</h2>
      <h2>{data?.surname}</h2>
      <h2>{data?.username}</h2>
    </div>
  );
}

export default Profil;
