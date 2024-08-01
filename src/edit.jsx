import React, { useState } from "react";
import { changePassword } from "./Server/authServer";
import Fullname from "./fullname";
import { notification } from "antd";
function Edit() {
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
      console.log(data);
      notification.success({
        message: changePss.message,
        description: " ",
      });
      console.log(changePss);
    } catch (error) {
      notification.error({
        message: "error",
        description: "Password error",
      });
      console.log("xato ozgarishda ", data);
    }
  };
  return (
    <div className="p-10">
      <Fullname />
      <form>
        <h2>Password change</h2>
        <input
          className=" mr-2 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          type="text"
          placeholder="old password"
          value={oldPassword}
          onChange={(e) => setOldPasspord(e.target.value)}
        />
        <input
          className="mr-2 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          type="text"
          placeholder="new pasword"
          value={newPassword}
          onChange={(e) => setNewPasspord(e.target.value)}
        />
        <button
          className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          onClick={handleChange}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default Edit;
