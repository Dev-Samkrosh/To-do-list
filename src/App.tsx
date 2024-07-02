import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import ToDo from "./components/ToDo/ToDo.component";
import Login from "./components/Login/Login.component";
import Register from "./components/Register/Register.component";
import "./index.css";

export default function App() {
  const useAuth = () => {
    //getting token from local storage
    const user = localStorage.getItem("token");
    //checking whether token is preset or not
    if (user) {
      return true;
    } else {
      return false;
    }
  };

  function PrivateRoutes() {
    const token = useAuth();
    return token ? <Outlet /> : <Navigate to="/login" />;
  }

  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route element={<ToDo />} path="/" />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Register />} />
    </Routes>
  );
}
