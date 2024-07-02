import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../axios";
import "./Register.styles.css";

export default function Register() {
  const [error, setError] = useState("");
  const [data, setData] = useState({
    nombre: "",
    email: "",
    contrasena: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("/auth/registro", data);
      navigate("/login");
    } catch (error: any) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full mx-auto p-6">
        <Link to="/login" className="text-blue-500 mb-4 block">
          Ya tienes cuenta? Inicia sesión
        </Link>
        <form onSubmit={handleSubmit} className="bg-gray-800 rounded-lg p-8">
          <h1 className="text-2xl font-bold mb-6">Regístrate</h1>
          <input
            type="text"
            placeholder="Nombre"
            name="nombre"
            onChange={handleChange}
            value={data.nombre}
            required
            className="bg-gray-700 appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline mb-4"
          />
          <input
            type="email"
            placeholder="Correo"
            name="email"
            onChange={handleChange}
            value={data.email}
            required
            className="bg-gray-700 appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline mb-4"
          />
          <input
            type="password"
            name="contrasena"
            placeholder="Contraseña"
            onChange={handleChange}
            value={data.contrasena}
            required
            className="bg-gray-700 appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline mb-4"
          />
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}
