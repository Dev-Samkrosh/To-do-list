import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogged(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");

    window.location.href = "/login";
  };

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="text-white text-xl font-bold">
          Inicio
        </Link>
        {isLogged ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded flex justify-center"
          >
            Cerrar sesión
          </button>
        ) : (
          <div className="flex justify-center">
            <Link to="/login" className="text-white hover:text-gray-300 mr-4">
              Iniciar sesión
            </Link>
            <Link to="/registro" className="text-white hover:text-gray-300">
              Registrate
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
