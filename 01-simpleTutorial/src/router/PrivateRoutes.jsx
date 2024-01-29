import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Settings } from "../pages/private/pages";
import ErrorPage from "./ErrorPage";

export default function PrivateRoutes() {
  let auth = false;
  const validation = (page) => {
    if (auth === true) {
      return page;
    } else {
      return  <Navigate to="/login" replace={true} />;
    }
  };
  return (
    <Routes>
      <Route index element={validation(<Dashboard />)} />
      <Route path="/settings" element={validation(<Settings />)} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}
