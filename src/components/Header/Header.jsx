import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Provider/AuthProvider";

const Header = () => {
  const { user, logOut,loading } = useAuth();

  console.log(user);

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to='/' className="text-xl font-bold">Social Media Website</Link>
          <nav className="flex items-center">
            <ul className="flex">
              <li className="px-4">
                <Link
                  to="#"
                  className="text-gray-200 font-medium hover:text-gray-500"
                >
                  Home
                </Link>
              </li>
              <li className="px-4">
                <Link
                  to="#"
                  className="text-gray-200 font-medium hover:text-gray-500"
                >
                  Profile
                </Link>
              </li>
              <li className="px-4">
                <Link
                  to="#"
                  className="text-gray-200 font-medium hover:text-gray-500"
                >
                  Messages
                </Link>
              </li>
              <li className="px-4">
                <Link
                  to="#"
                  className="text-gray-200 font-medium hover:text-gray-500"
                >
                  Settings
                </Link>
              </li>
            </ul>
            {user ? (
              <button onClick={logOut} className="btn btn-primary ml-4">
                Logout
              </button>
            ) : (
              <div className="flex">
                <Link to="/register" className="btn btn-primary mr-2">
                  Register
                </Link>
                <Link to="/login" className="btn btn-secondary">
                  Log In
                </Link>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
