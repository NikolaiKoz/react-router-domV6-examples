import { Routes, Route } from "react-router-dom";
import { Dashboard, Settings } from "../pages/private/pages";
import ErrorPage from "./ErrorPage";
export default function PrivateRoutes() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}
