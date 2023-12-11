import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/public/pages";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
