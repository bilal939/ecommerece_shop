import { Outlet } from "react-router-dom";
const AuthLayout = () => {
  return (
    <div className="bg-primary-foreground items-center justify-center flex h-screen w-screen">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
