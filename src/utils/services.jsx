import React, { useEffect, useState } from "react";
import { services, upload } from "../Server/authServer";

const Services = () => {
  const [img, setImg] = useState(null);
  const [imageId, setImageId] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [maxPrice, setMaxPrice] = useState(99);
  const [minPrice, setMinPrice] = useState(1);
  const [showPrice, setShowPrice] = useState(true);
  const [tags, setTags] = useState([""]);

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
      const mall = resImg[0]._id;
      setImageId(mall);

      const data = {
        images: [mall],
        translations: {
          eng: { name, description },
          ru: { name, description },
          uz: { name, description },
        },
        maxPrice,
        minPrice,
        showPrice,
        tags,
      };

      const resServices = await services(data);
      console.log(resServices);
    } catch (error) {
      console.error("Error uploading image:", error);
      if (error.response && error.response.status === 401) {
        alert("Unauthorized. Please check your token.");
      }
    }
  };

  useEffect(() => {
    console.log("Image ID:", imageId);
  }, [imageId]);

  return (
    <div className="bg-white w-[40%] m-auto mt-20">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
        Services
      </h2>
      <p className="leading-relaxed mb-5 text-gray-600">
        Post-ironic portland shabby chic echo park, banjo fashion axe
      </p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
          Product
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="description" className="leading-7 text-sm text-gray-600">
          Description
        </label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          name="description"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="file" className="leading-7 text-sm text-gray-600">
          File
        </label>
        <input
          type="file"
          name="file"
          onChange={handleChange}
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="maxPrice" className="leading-7 text-sm text-gray-600">
          Max Price
        </label>
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="minPrice" className="leading-7 text-sm text-gray-600">
          Min Price
        </label>
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="showPrice" className="leading-7 text-sm text-gray-600">
          Show Price
        </label>
        <input
          type="checkbox"
          checked={showPrice}
          onChange={(e) => setShowPrice(e.target.checked)}
          className="mr-2 leading-7 text-sm text-gray-600"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="tags" className="leading-7 text-sm text-gray-600">
          Tags
        </label>
        <input
          type="text"
          value={tags.join(",")}
          onChange={(e) => setTags(e.target.value.split(","))}
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <button
        onClick={handleUpload}
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Submit
      </button>
    </div>
  );
};

export default Services;
