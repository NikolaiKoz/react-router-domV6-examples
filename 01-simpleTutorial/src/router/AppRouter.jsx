import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/public/pages";
import PublicRoutes from "./PublicRoutes";
import AppLayout from "../components/layouts/AppLayout";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="/*" element={<PublicRoutes />} />
      </Route>
    </Routes>
  );
}
