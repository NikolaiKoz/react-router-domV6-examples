import { useRouteError, Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

export default function NotFound() {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <Navbar />
      <h1>404</h1>
      <p>Page not found</p>
      <p>{error.statusText || error.message}</p>
      <Link to={"/"}>Volver al home</Link>
    </div>
  );
}
