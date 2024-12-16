import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./dashboard/pages/home/Home";
import Login from "./onboarding/pages/login/Login";
import ProtectedRoute from "./components/ProtectedRoute";


import DashboardBase from "./components/DashboardBase";
import Profile from "./dashboard/pages/profile/Profile";
export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem("token"); // Example: Check token presence
  return !!token; // Returns true if token exists, otherwise false
};

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardBase>
                  <Home />
              </DashboardBase>
            </ProtectedRoute>
          }
        />
        <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <DashboardBase>
                <Profile/>
            </DashboardBase>
          </ProtectedRoute>
        }
      />

        <Route
          path="/login"
          element={
             isAuthenticated()? <Navigate to="/" /> : <Login />
          }
        />
        <Route path="*" element={<Navigate to={ isAuthenticated()? "/" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;
