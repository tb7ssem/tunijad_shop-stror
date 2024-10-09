import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api", // Ensure this matches your server's address and port
  withCredentials: true, // send cookies to the server
});

export default axiosInstance;
