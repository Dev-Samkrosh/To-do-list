import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../axios";
import useSignIn from "react-auth-kit/hooks/useSignIn";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const signIn = useSignIn();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("/auth/login", {
        email: email,
        contrasena: password,
      });

      const token = response.data.token;

      if (
        signIn({
          auth: {
            token: token,
            type: "Bearer",
          },
        })
      ) {
        localStorage.setItem("token", token);
        console.log(token);
        navigate("/");
      } else {
        setError("Error al iniciar sesión");
      }
    } catch (error: any) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500
      ) {
        setError(error.response.data.message);
      } else {
        setError("Error de conexión");
      }
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full mx-auto p-6">
        <Link to="/registro" className="text-blue-500 mb-4 block">
          No tienes cuenta?
        </Link>
        <form className="bg-gray-800 rounded-lg p-8" onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold mb-6">Inicia Sesión</h1>
          <input
            className="bg-gray-700 appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline mb-4"
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="bg-gray-700 appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline mb-4"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
