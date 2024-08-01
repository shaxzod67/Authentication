import axios from "axios";

const instance = axios.create()
instance.defaults.baseURL = "https://akfamakon-test.onrender.com/api"
export default instance;