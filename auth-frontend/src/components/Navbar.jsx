// import { Link } from "react-router-dom";
// import "./../styles/layout.css";
// import { isLoggedIn, logout } from "../utils/auth";
// import { useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   return (
//     <nav className="navbar">
//       <h2 className="logo">AuthApp</h2>

//       <div className="nav-links">
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>

//         {isLoggedIn() ? (
//           <>
//             <Link to="/profile">Profile</Link>
//             <button className="nav-btn" onClick={handleLogout}>
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <Link to="/login">Login</Link>
//             <Link to="/change-password">Change Password</Link>
//             <Link to="/register" className="nav-btn">
//               Register
//             </Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import "../styles/layout.css";

import { Link, useNavigate } from "react-router-dom";
import { isLoggedIn, logout } from "../utils/auth";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2 className="logo">AuthApp</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        {isLoggedIn() ? (
          <>
            <Link to="/profile">Profile</Link>
            <Link to="/change-password">Change Password</Link>
            <button className="nav-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register" className="nav-btn">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
