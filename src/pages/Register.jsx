import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaFacebookF,
} from "react-icons/fa";

import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!name || !email || !password) {
      toast.warning("Please fill all fields");
      return;
    }

    if (password.length < 6) {
      toast.warning("Password must be at least 6 characters");
      return;
    }

    try {
      setLoading(true);

      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      await updateProfile(userCredential.user, {
        displayName: name,
      });

      await setDoc(doc(db, "users", userCredential.user.uid), {
        uid: userCredential.user.uid,
        name,
        email,
        createdAt: new Date(),
      });

      toast.success("Account Created Successfully 🎉");

      navigate("/");
    } catch (error) {
      toast.error(error.message);
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
      <div className="w-full max-w-6xl bg-white/95 backdrop-blur-xl rounded-[35px] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.35)] grid lg:grid-cols-2"></div>
              {/* Left Side */}
        <div className="relative hidden lg:block">

          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80"
            alt="Travel"
            className="w-full h-full object-cover"
          />

          < div className="absolute inset-0 bg-black/30">

          <div className="absolute top-10 left-10">
            <h1 className="text-5xl font-extrabold text-white">
              <span className="text-orange-400">Travel</span>Go
            </h1>

            <p className="text-white text-lg mt-5 leading-8 max-w-sm">
              Join thousands of travelers and start exploring amazing
              destinations today.
            </p>
          </div>

        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center p-10 lg:p-14">

          <div className="w-full max-w-md">

            <h2 className="text-4xl font-bold text-gray-800">
              Create Account 🚀
            </h2>

            <p className="text-gray-500 mt-3 mb-8">
              Register to start your journey.
            </p>

            <label className="font-semibold text-gray-700">
              Full Name
            </label>

            <div className="flex items-center border rounded-xl h-14 px-4 mt-2 mb-5">
              <FaUser className="text-gray-400" />
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 ml-3 outline-none"
              />
            </div>

            <label className="font-semibold text-gray-700">
              Email Address
            </label>

            <div className="flex items-center border rounded-xl h-14 px-4 mt-2 mb-5">
              <FaEnvelope className="text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 ml-3 outline-none"
              />
            </div>

            <label className="font-semibold text-gray-700">
              Password
            </label>

            <div className="flex items-center border rounded-xl h-14 px-4 mt-2 mb-6">
              <FaLock className="text-gray-400" />
              <input
                type="password"
                placeholder="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex-1 ml-3 outline-none"
              />
            </div>

            <button
              onClick={handleRegister}
              disabled={loading}
              className="w-full h-14 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>

            <div className="flex items-center my-8">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="mx-4 text-gray-400">OR</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">

              <button className="border h-12 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100">
                <FaGoogle className="text-red-500" />
                Google
              </button>

              <button className="border h-12 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100">
                <FaFacebookF className="text-blue-600" />
                Facebook
              </button>

            </div>

            <p className="text-center mt-8 text-gray-500">
              Already have an account?

              <Link
                to="/login"
                className="text-orange-500 font-bold ml-2 hover:underline"
              >
                Login
              </Link>

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}