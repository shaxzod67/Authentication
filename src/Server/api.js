import axios from "axios";

const instance = axios.create()
instance.defaults.baseURL = "https://akfamakon-onrender.onrender.com/api"
export default instance;