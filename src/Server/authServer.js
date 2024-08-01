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

export const upload = async (data) => {
  const token = localStorage.getItem("token");
  const resImg = await axios.post("/file/upload/folder_name", data, {
    headers: {
      Authorization: token,
    },
  });
  console.log("avatar data", resImg.data);
  return resImg.data;
};

export const nameFull = async (data) => {
  const token = localStorage.getItem("token");
  const fullname = await axios.put("/auth", data, {
    headers: {
      Authorization: token,
    },
  });
  console.log("Form data", fullname.data);
  return fullname.data;
};

export const services = async (data) => {
  const token = localStorage.getItem("token");
  const servicess = await axios.post("/service", data, {
    headers: {
      Authorization: token,
    },
  });
  console.log("services data", servicess.data);
  return servicess.data;
};

export const serviceGet = async (data) => {
  const serviceGetData = await axios.get("/service", data);
  console.log("servicesGetData data", serviceGetData.data);
  return serviceGetData.data;
};
