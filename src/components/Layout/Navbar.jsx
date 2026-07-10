import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    alert("Logged Out Successfully");
  };

  const menu = [
    { name: "Home", path: "/" },
    { name: "Hotels", path: "/hotels" },
    { name: "Flights", path: "/flights" },
    { name: "Packages", path: "/packages" },
    { name: "Wishlist", path: "/wishlist" },
    { name: "My Bookings", path: "/my-bookings" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200">

      <div className="max-w-[1350px] mx-auto px-5 lg:px-8">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="text-3xl font-extrabold tracking-tight">
            <span className="text-orange-500">Travel</span>
            <span className="text-gray-900">Go</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {menu.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `font-semibold transition duration-300 ${
                    isActive
                      ? "text-orange-500"
                      : "text-gray-700 hover:text-orange-500"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
                    {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4">

            {user ? (
              <>
                <div className="flex items-center gap-3 bg-orange-50 px-4 py-2 rounded-full">

                  <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold uppercase">
                    {user.displayName
                      ? user.displayName.charAt(0)
                      : user.email.charAt(0)}
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Welcome
                    </p>

                    <p className="font-semibold text-gray-800">
                      {user.displayName || user.email}
                    </p>
                  </div>

                </div>

                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="font-semibold text-gray-700 hover:text-orange-500 transition"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 hover:scale-105 text-white px-7 py-3 rounded-full font-semibold shadow-lg shadow-orange-500/30"
                >
                  Register
                </Link>
              </>
            )}

          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-3xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t">

          <div className="flex flex-col p-6 gap-5">

            {menu.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `font-medium ${
                    isActive
                      ? "text-orange-500"
                      : "text-gray-700 hover:text-orange-500"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <hr />

            {user ? (
              <>
                <p className="font-semibold text-center">
                  {user.displayName || user.email}
                </p>

                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white py-3 rounded-xl"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="border border-orange-500 text-orange-500 text-center py-3 rounded-xl"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  onClick={() => setOpen(false)}
                  className="bg-orange-500 text-white text-center py-3 rounded-xl"
                >
                  Register
                </Link>
              </>
            )}

          </div>

        </div>
      )}

    </header>
  );
}