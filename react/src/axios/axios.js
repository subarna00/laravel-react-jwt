import axios from "axios";
import Cookies from "universal-cookie";
const axiosClient = axios.create({
    baseURL: "http://localhost:8000/api",
});

axiosClient.interceptors.request.use((config) => {
    const cookies = new Cookies();

    config.headers.Authorization = `Bearer ${cookies.get("access_token")}`;

    return config;
});
axiosClient.interceptors.response.use(
    (response) => response,
    (error) => {
        error;
    }
);

export default axiosClient;
