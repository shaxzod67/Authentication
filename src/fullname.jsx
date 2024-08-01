import React, { useState } from "react";
import { nameFull, upload } from "./Server/authServer";
import { notification } from "antd";
function Fullname() {
  const [img, setImg] = useState(null);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [avatars, setAvatars] = useState("");
  console.log(avatars);

  const handleChange = (e) => {
    setImg(e.target.files[0]);
  };
  const handleUpload = async () => {
    if (!img) {
      alert("Please select a file first!");
      return;
    }
    const formData = new FormData();
    formData.append("file", img);

    try {
      const resImg = await upload(formData);
      console.log(resImg);
      const mall = resImg[0]._id;
      console.log("mall", mall);
      setAvatars(mall);
    } catch (error) {
      console.log("xato", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      surname,
      avatars,
    };
    try {
      const resFull = await nameFull(data);
      notification.success({
        message: "malumot o'zgardi",
      });
      console.log(resFull);
    } catch (error) {
      notification.error({
        message: "error",
        error,
      });
      console.log("Full name ", error);
    }
  };

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Full Name
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="surname"
                  className="leading-7 text-sm text-gray-600"
                >
                  Surname
                </label>
                <input
                  type="text"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  name="surname"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="file"
                  className="leading-7 text-sm text-gray-600"
                >
                  Image
                </label>
                <input
                  type="file"
                  name="file"
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                {/* <Link to="/profil">Update</Link> */} Update
              </button>
              <button
                onClick={handleUpload}
                className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg ml-2"
              >
                Upload
              </button>
              <p className="text-xs text-gray-500 mt-3">
                Literally you probably haven't heard of them jean shorts.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Fullname;
