import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import {loginSchema} from "../schemas/userSchema"
import toast, { Toaster } from 'react-hot-toast';
const Login = ({ setIsAuthenticated }) => {
    const navigate = useNavigate();
    const {
      register,
      handleSubmit,
      setError,
      formState: { errors, isSubmitting },
    } = useForm({
      resolver: zodResolver(loginSchema),
    });

  const onSubmit = (data) => {
  const stored = localStorage.getItem("users");
  if (!stored) {
    setError("root", { message: "No account found. Please sign up first." });
    return;
  }

  const users = JSON.parse(stored); // ✅ it's an array

  const user = users.find(
    (u) => u.email === data.email && u.password === data.password
  );

  if (!user) {
    setError("root", { message: "Invalid email or password." });
    return;
  }

  setIsAuthenticated(true);
  toast('Logged In Successfully!',
  {
    icon: '👏',
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }
);
  setTimeout(() => {
    navigate("/home");
  }, 1000);
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      <Toaster />
      {/* Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-[300px] h-[300px] bg-white/5 rounded-full blur-2xl bottom-10 right-10"></div>

      {/* Glass Card */}
      <div className="relative w-full max-w-md mx-4 p-8 rounded-2xl 
        bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg">

        {/* Heading */}
        <p className="text-xs tracking-widest text-gray-400 text-center">
          WELCOME BACK
        </p>
        <h2 className="text-3xl font-semibold text-white text-center mt-2 mb-6">
          LOGIN
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
        {errors.root && <p style={{ color: "red" }}>{errors.root.message}</p>}
          {/* Email */}
          <div>
            <label className="text-xs text-gray-400 tracking-wider">
              EMAIL ADDRESS
            </label>
            <div className="mt-1 flex items-center border border-white/10 rounded-lg px-3 py-2 bg-white/5">
              <input
                type="email" {...register("email")}
                placeholder="Enter your email"
                className="bg-transparent w-full text-white placeholder-gray-500 outline-none"
              />
            </div>
            {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="text-xs text-gray-400 tracking-wider">
              PASSWORD
            </label>
            <div className="mt-1 flex items-center border border-white/10 rounded-lg px-3 py-2 bg-white/5">
              <input
                type="password" {...register("password")}
                placeholder="Enter your password"
                className="bg-transparent w-full text-white placeholder-gray-500 outline-none"
              />
            </div>
            {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
          </div>


          {/* Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-lg mt-2 
            bg-white/10 text-white border border-white/20 
            hover:bg-white/20 transition"
          >
            LOGIN
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-gray-400 text-center mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-white hover:underline">
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;