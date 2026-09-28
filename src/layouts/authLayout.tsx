import { Outlet } from "react-router-dom";
const AuthLayout = () => {
  return (
    <div className="bg-background items-center justify-center flex h-screen w-screen">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
