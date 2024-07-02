import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/",
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Obtenemos el token de localStorage

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    console.log("Error en la petición 🐕", error);
    return Promise.reject(error);
  }
);

export default instance;
