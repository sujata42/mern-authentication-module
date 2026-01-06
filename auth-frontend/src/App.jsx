import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ChangePassword from "./pages/ChangePassword";
import Navbar from "./components/Navbar";
import { isLoggedIn } from "./utils/auth";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={isLoggedIn() ? <Profile /> : <Navigate to="/login" />}
        />
        <Route
          path="/change-password"
          element={isLoggedIn() ? <ChangePassword /> : <Navigate to="/login" />}
        />
        
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
