import React, { useState, useEffect } from "react";
import { serviceGet } from "./Server/authServer";

const GetDataServices = () => {
//   const [img, setImg] = useState("");
  const [tags, setTags] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [transitionEn, setTransitionEn] = useState("");
  const [transitionRu, setTransitionRu] = useState("");
  const [transitionUz, setTransitionUz] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataGEt = await serviceGet();
        const imgLocation = dataGEt.services[0].images[0].location;
        setImg(imgLocation);
        
        const transitionData = dataGEt.services[0].translations;
        const eng = transitionData.eng.name;
        const ru = transitionData.ru.name;
        const uz = transitionData.uz.name;
        
        setTransitionEn(eng);
        setTransitionRu(ru);
        setTransitionUz(uz);

        const maxprice = dataGEt.services[0].maxPrice;
        const tagsData = dataGEt.services[0].tags;
        setMaxPrice(maxprice);
        console.log(maxPrice);
        setTags(tagsData)
        console.log(tags);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs once after initial render

  return (
    <div>
      <div>
        <img src={imgLocation} alt="" />
        <p>en: {transitionEn}</p>
        <p>ru: {transitionRu}</p>
        <p>uz: {transitionUz}</p>
        <h2>MaxPrice: {maxPrice}</h2>
        <h2>Tags: {tags}</h2>
      </div>
    </div>
  );
};

export default GetDataServices;
