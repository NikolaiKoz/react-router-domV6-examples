import { Outlet } from "react-router-dom";
import AppNavbar from "../navbars/AppNavbar";
import AppFooter from "../footers/AppFooter";

export default function AppLayout() {
  return (
    <d>
      <AppNavbar />
      <div className="Wrapper1">
        <Outlet />
      </div>
      <AppFooter />
    </d>
  );
}
