// import React, { useState } from "react";
// import axios from "axios";

// const FileUpload = () => {
//   const [file, setFile] = useState(null);

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const handleFileUpload = async () => {
//     if (!file) {
//       alert("Please select a file first!");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.post(
//         "https://akfamakon-onrender.onrender.com/api/file/upload/folder_name",
//         formData,
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );
//       console.log("File uploaded successfully", response.data[0]._id);
//     } catch (error) {
//       console.error("Error uploading file", error);
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleFileUpload}>Upload</button>
//     </div>
//   );
// };

// export default FileUpload;
