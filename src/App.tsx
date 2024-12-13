import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./dashboard/pages/home/Home";
import Login from "./onboarding/pages/login/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./onboarding/pages/signup/Signup";
import { isAuthenticated } from "./utils/IsAithenticated";
import DashboardBase from "./components/DashboardBase";
import Profile from "./dashboard/pages/profile/Profile";

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
            isAuthenticated() ? <Navigate to="/" /> : <Login />
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to={isAuthenticated() ? "/" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;
