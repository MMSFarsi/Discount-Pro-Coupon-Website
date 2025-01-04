import { useContext } from "react";
import { FaHome, FaTags } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="sticky top-0 z-50 bg-slate-100 shadow-md rounded-md">
      <p className="text-center font-bold text-sm">
        {user
          ? `Welcome back, ${user.displayName} 🎉`
          : "Welcome to Discount PRO! Please log in to access your coupons. 🎉"}
      </p>
      <div className="navbar bg-slate-100 rounded-md shadow-md">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3 py-2 rounded-md font-medium transition-colors duration-300 ${isActive
                      ? "bg-blue-500 text-white"
                      : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                    }`
                  }
                >
                  <FaHome /> Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/brands"
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3 py-2 rounded-md font-medium transition-colors duration-300 ${isActive
                      ? "bg-blue-500 text-white"
                      : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                    }`
                  }
                >
                  <FaTags /> Brands
                </NavLink>
              </li>
              {user && (
                <li>
                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      `flex items-center gap-2 px-3 py-2 rounded-md font-medium transition-colors duration-300 ${isActive
                        ? "bg-blue-500 text-white"
                        : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                      }`
                    }
                  >

                   <CgProfile/> My Profile
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
          <Link to="/" className=" text-[16px] lg:text-xl font-bold text-gray-800">
            Discount PRO
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-md font-medium transition-colors duration-300 ${isActive
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                  }`
                }
              >
                <FaHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/brands"
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-md font-medium transition-colors duration-300 ${isActive
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                  }`
                }
              >
                <FaTags /> Brands
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3 py-2 rounded-md font-medium transition-colors duration-300 ${isActive
                      ? "bg-blue-500 text-white"
                      : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                    }`
                  }
                >
                   <CgProfile/> My Profile
                </NavLink>
              </li>
            )}
          </ul>
        </div>

        <div className="navbar-end ml-auto">
          <div className="flex items-center gap-4">

            {user?.photoURL && (
             <Link to="/profile">
              <img
                src={user.photoURL}
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-blue-500"
              />
             </Link>
            )}

            {user?.email && (
            <span className="hidden sm:inline text-gray-700 text-sm font-medium">
            {user.email}
          </span>
          
            )}

            {user ? (
              <button
                onClick={logOut}
                className="btn btn-sm btn-primary rounded-md"
              >
                Logout
              </button>
            ) : (
              <div className="flex gap-2">
                <Link
                  to="/login"
                  className="btn btn-sm bg-blue-500 text-white hover:bg-blue-600 rounded-md"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="btn btn-sm bg-green-500 text-white hover:bg-green-600 rounded-md"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
