# 01-simpleTutorial Docs

## _Router - Routes - Route - Navigate - Outlet_

En este tutorial se muestra una estructura basica de carpetas de un enrrutador para una spa o mpa, tendremos rutas publicas, privadas, redirecciones y un layout de nuestra app.

### [ 1 🎉] Agregando el browser router a la app.

- En el main de nuestra app devemos envolver a nuestra app con el BrowserRouter de RRD. Por defecto el.

```
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>
);
```

El strictMode de React puedes conservarlo si gustas.

### [ 2 🧾 ] Estructura de carpetas.

```sh
|📂 src
    |📂pages
        |📂public
            📄 Home.jsx
            📄 Login.jsx
            💼 pages.js
        |📂private
            📄 Admin.jsx
            📄 Dashboard.jsx
            💼 pages.js
    |📂router
        ⚙ AppRouter.jsx
        ⚙ ErrorPage.jsx
        ⚙ PrivateRoutes.jsx
        ⚙ PublicRoutes.jsx
```

### [ 3 ] El `<AppRouter>`.

- `<AppRouter>` sera el componente donde se crean las distintas rutas de la app.

```sh
import { Routes, Route } from "react-router-dom";

    <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<AppLayout />}>
        <Route path="/*" element={<PublicRoutes />} />
        </Route>
    </Routes>
```

- Definimos nuestro index, en este caso es la pagina home.
- Definimos el AppLayout el cual es la navbar y el footer de toda la app, lo que cambiara sera el contenido que se encuentre entre estos.
- Y todas las rutas hijas de la raiz /\* seran las rutas publicas.

### [ 4 ] El `<AppLayout>`.

```sh
import { Outlet } from "react-router-dom";

    <>
      <AppNavbar />
      <div className="Wrapper1">
        <Outlet />
      </div>
      <AppFooter />
    </>
```

### [ 5 ] El `<PublicRoutes>`.

- Aqui colocamos todas las rutas publicas y tambien la pagina de error 404 si no se encuentra la pagina

```sh
import { Routes, Route } from "react-router-dom";

   <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard/*" element={<PrivateRoutes />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
```

### [ 6 ] El `<PrivateRoutes>`.

- Colocamos las paginas que para acceder / ver su contenido el usuario debe verificarse, para este ejemplo la verificacion es sumamente simple y si el usuario no lo esta lo redirige al login.

```sh

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

```
