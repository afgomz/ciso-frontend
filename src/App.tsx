import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { ProtectedRoute } from "@/components/ProtectedRoute";

// Import your dashboard section pages
import Overview from "./pages/dashboard/Overview";
import Reports from "./pages/dashboard/Reports"
import Users from "./pages/dashboard/Users";
import Progress from "./pages/dashboard/Progress";

export default function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      {/* Protected Dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      >
        {/* Nested dashboard routes */}
        <Route index element={<Navigate to="overview" replace />} />
        <Route path="overview" element={<Overview />} />
        <Route path="reports" element={<Reports />} />
        <Route path="users" element={<Users />} />
        <Route path="progress" element={<Progress />} />
      </Route>
    </Routes>
  );
}