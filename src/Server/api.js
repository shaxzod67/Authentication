import axios from "axios";

const instance = axios.create()
instance.defaults.baseURL = "https://hellomag.uz/v1/api"
export default instance;