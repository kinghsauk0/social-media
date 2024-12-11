
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./dashboard/pages/home/Home";
import Login from "./onboarding/pages/login/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./onboarding/pages/signup/Signup";
import { isAuthenticated } from "./utils/IsAithenticated";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route element={
            isAuthenticated() ? <Navigate to="/" /> : <Login />
          } />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
