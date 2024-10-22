import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = ({ user, redirect = "/login", children }) => {
  if (user) {
    return children ? children : <Outlet />;
  }

  return <Navigate to={redirect} />;
};

export default ProtectRoute;
