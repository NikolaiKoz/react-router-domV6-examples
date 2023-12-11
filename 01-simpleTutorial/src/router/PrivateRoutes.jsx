import { Routes, Route } from "react-router-dom"
import { Dashboard } from "../pages/private/pages"
export default function PrivateRoutes() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
    </Routes>
  )
}
