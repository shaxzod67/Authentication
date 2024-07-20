import axios from "./api";

export async function register(data) {
  const res = await axios.post("users/register", data);
  console.log("data", res.data);
  return res.data;
}

export const login = async (data) => {
  const res = await axios.post("users/login", data);
  console.log("data", res.data);
  return res.data;
};



