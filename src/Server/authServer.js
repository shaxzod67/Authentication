import { data } from "autoprefixer";
import axios from "./api";

export async function register(data) {
  const res = await axios.post("/auth/register", data);
  console.log("data", res.data);
  return res.data;
}

export const login = async (data) => {
  const res = await axios.post("/auth/login", data);
  console.log("data", res.data);
  return res.data;
};

export const changePassword = async (data) => {
  const token = localStorage.getItem("token");
  const res = await axios.put("/auth/change-password", data, {
    headers: {
      Authorization: token,
    },
  });
  console.log("data", res.data);
  return res.data;
};

export const profil = async (e) => {
  const token = localStorage.getItem("token");
  const resProfil = await axios.get("/auth/my-data", {
    headers: {
      Authorization: token,
    },
  });
  console.log("profil data", resProfil.data);
  return resProfil.data;
};

export const upload = (file) => {
  const token = localStorage.getItem("token");
  const resProfil = axios.post("/file/upload/folder_name", file, {
    
    headers: {
      Authorization: token,
    },
  });
  console.log("avatar data", resProfil.data);
  return resProfil.data;
};

export const nameFull = async () => {
  const token = localStorage.getItem("token");
  const fullname = await axios.put("/auth", data, {
    headers: {
      Authorization: token,
    },
  });
  console.log("Form data", fullname.data);
  return fullname.data;
};
