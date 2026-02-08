import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "../pages/Login/LoginPage";
import RegisterPage from "../pages/Register/RegisterPage";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import Unauthorized from "../pages/Unauthorized/Unauthorized";
import OtpVerify from "../components/auth/OtpVerify";

import ProtectedRoute from "./ProtectedRoute";
import RoleProtectedRoute from "./RoleProtectedRoute";

const AppRoutes = () => {
  return (
   <BrowserRouter>
      <Routes>

        {/* ROOT REDIRECT */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/register"
          element={
            <RoleProtectedRoute allowedRoles={["manager"]}>
              <RegisterPage />
            </RoleProtectedRoute>
          }
        />
        <Route path="/verify-otp" element={<OtpVerify />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        <Route path="/unauthorized" element={<Unauthorized />} />

      </Routes>
    </BrowserRouter>

  );
};

export default AppRoutes;
