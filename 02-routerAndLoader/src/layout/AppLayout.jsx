import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

export default function AppLayout() {
  const navigation = useNavigation();
  return (
    <>
      <Navbar />
      <main className="container">
        {navigation.state === "loading" && (
          <div className="text-center">
            <div className="spinner-border text-succesful" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        <Outlet />
      </main>
      <footer className="container text-center">Footer</footer>
    </>
  );
}
