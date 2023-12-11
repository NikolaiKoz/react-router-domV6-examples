import { Routes, Route } from "react-router-dom";
import {Home} from "../pages/public/pages"
import PublicRoutes from "./PublicRoutes";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/*" element={<PublicRoutes />} />
      </Route>
    </Routes>
  );
}
