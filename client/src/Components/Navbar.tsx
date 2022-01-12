import React from "react";
import { Link } from "react-router-dom";

function Navbar(props: any) {
  return (
    <div className="bg-emerald-800">
      <nav className="flex items-center justify-between bg-emerald-800 p-6 container mx-auto">
        <div>
          <Link to="/">
            <img
              src="https://www.cktech.biz/sites/default/files/ckt-logo-white300.png"
              alt=""
              className="h-20 w-30"
            />
          </Link>
        </div>

        <div className="text-lg text-gray-600 hidden lg:flex">
          <Link
            to="/"
            className="block mt-4 lg:inline-block text-emerald-50 lg:mt-0 mr-10"
          >
            Home
          </Link>
          <Link
            to="/liveview"
            className="block mt-4 lg:inline-block text-emerald-50 lg:mt-0 mr-10"
          >
            Live View
          </Link>
          <Link
            to="/clientlogin"
            className="block mt-4 lg:inline-block text-emerald-50 lg:mt-0 mr-10"
          >
            Client Login
          </Link>
          <Link
            to="/adminlogin"
            className="block mt-4 lg:inline-block text-emerald-50 lg:mt-0 mr-10"
          >
            Admin Login
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
