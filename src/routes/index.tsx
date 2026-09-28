import { Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "../layouts/authLayout";
import { Login, Registration } from "../pages";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Registration />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
