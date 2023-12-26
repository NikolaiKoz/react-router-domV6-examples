import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/public/pages";
import ErrorPage from "./ErrorPage";
import PrivateRoutes from "./PrivateRoutes";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard/*" element={<PrivateRoutes />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}
