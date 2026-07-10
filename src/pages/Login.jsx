import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaFacebookF,
} from "react-icons/fa";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {

      setLoading(true);

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      toast.success("Login Successful 🎉");

      navigate("/");

    } catch (error) {

      alert("Invalid Email or Password");

    } finally {

      setLoading(false);

    }

  };

  return (
   <section
  className="min-h-screen flex items-center justify-center p-8 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=80')",
  }}
>
     <div className="w-full max-w-6xl bg-white/95 backdrop-blur-xl rounded-[35px] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.35)] grid lg:grid-cols-2">

        {/* Left Side */}
        <div className="relative hidden lg:block">

          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80"
            alt="Travel"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>

          <div className="absolute top-10 left-10">

            <h1 className="text-5xl font-extrabold text-white">
              <span className="text-orange-400">Travel</span>Go
            </h1>

            <p className="text-white text-lg mt-5 leading-8 max-w-sm">
              Discover beautiful destinations around the world.
              Book flights, hotels and holiday packages with ease.
            </p>

          </div>

          <div className="absolute bottom-10 left-10 bg-white/20 backdrop-blur-md rounded-2xl p-5">

            <h3 className="text-white text-2xl font-bold">
              ✈ Travel Smart
            </h3>

            <p className="text-white/90 mt-2">
              Trusted by 50,000+ Travelers
            </p>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center p-10 lg:p-14">

          <div className="w-full max-w-md">

            <h2 className="text-4xl font-bold text-gray-800">
              Welcome Back 👋
            </h2>

            <p className="text-gray-500 mt-3 mb-10">
              Login to continue your journey.
            </p>
                        {/* Email */}

            <label className="font-semibold text-gray-700">
              Email Address
            </label>

            <div className="flex items-center border rounded-xl h-14 px-4 mt-2 mb-6">

              <FaEnvelope className="text-gray-400"/>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 ml-3 outline-none"
              />

            </div>

            {/* Password */}

            <label className="font-semibold text-gray-700">
              Password
            </label>

            <div className="flex items-center border rounded-xl h-14 px-4 mt-2">

              <FaLock className="text-gray-400"/>

              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex-1 ml-3 outline-none"
              />

            </div>

            <div className="flex justify-between items-center mt-5">

              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox"/>
                Remember me
              </label>

              <button
                type="button"
                className="text-blue-600 hover:underline"
              >
                Forgot Password?
              </button>

            </div>

            {/* Login Button */}
            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full h-14 mt-8 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg transition duration-300"
            >
              {loading ? "Logging In..." : "Login"}
            </button>

            {/* Divider */}
            <div className="flex items-center my-8">
              <div className="flex-1 h-px bg-gray-300"></div>

              <span className="mx-4 text-gray-400 font-medium">
                OR
              </span>

              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-4">

              <button className="border h-12 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-100 transition">
                <FaGoogle className="text-red-500"/>
                Google
              </button>

              <button className="border h-12 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-100 transition">
                <FaFacebookF className="text-blue-600"/>
                Facebook
              </button>

            </div>

            {/* Sign Up */}
            <p className="text-center mt-8 text-gray-500">

              Don't have an account?

              <Link
                to="/register"
                className="text-orange-500 font-bold ml-2 hover:underline"
              >
                Sign Up
              </Link>

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}