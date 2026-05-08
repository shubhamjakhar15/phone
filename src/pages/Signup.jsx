import React, { useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import { signupSchema } from "../schemas/userSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast, { Toaster } from 'react-hot-toast';

const Signup = () => {
    const navigate = useNavigate();
  const [submittedData, setSubmittedData] = useState(() => {
    const data = JSON.parse(localStorage.getItem("users"));
    return data || [];
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(submittedData));
  }, [submittedData]);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  function onSubmit(data) {
    const emailExists = submittedData.some((user) => user.email === data.email);
  
    if (emailExists) {
    setError("email", {
      type: "manual",
      message: "This email is already registered",
    });
    return;
  }
    setSubmittedData((prev) => [...prev, data]);
    toast('Signed Up Succesfully!',
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
    navigate("/");
  }, 1000);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
        <Toaster />
      <div className="absolute w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-[300px] h-[300px] bg-white/5 rounded-full blur-2xl bottom-10 right-10"></div>

      <div className="relative w-full max-w-md mx-4 p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg">
        <p className="text-xs tracking-widest text-gray-400 text-center">CREATE ACCOUNT</p>
        <h2 className="text-3xl font-semibold text-white text-center mt-2 mb-6">SIGN UP</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name */}
          <div>
            <label className="text-xs text-gray-400 tracking-wider">FULL NAME</label>
            <div className="mt-1 flex items-center border border-white/10 rounded-lg px-3 py-2 bg-white/5">
              <input
                {...register("name")}
                type="text"
                placeholder="Enter your full name"
                className="bg-transparent w-full text-white placeholder-gray-500 outline-none"
              />
            </div>
            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="text-xs text-gray-400 tracking-wider">EMAIL ADDRESS</label>
            <div className="mt-1 flex items-center border border-white/10 rounded-lg px-3 py-2 bg-white/5">
              <input
                {...register("email")}
                type="email"
                placeholder="Enter your email address"
                className="bg-transparent w-full text-white placeholder-gray-500 outline-none"
              />
            </div>
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="text-xs text-gray-400 tracking-wider">PASSWORD</label>
            <div className="mt-1 flex items-center border border-white/10 rounded-lg px-3 py-2 bg-white/5">
              <input
                {...register("password")}
                type="password"
                placeholder="Enter your password"
                className="bg-transparent w-full text-white placeholder-gray-500 outline-none"
              />
            </div>
            {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-xs text-gray-400 tracking-wider">CONFIRM PASSWORD</label>
            <div className="mt-1 flex items-center border border-white/10 rounded-lg px-3 py-2 bg-white/5">
              <input
                {...register("confirmPassword")}
                type="password"
                placeholder="Confirm your password"
                className="bg-transparent w-full text-white placeholder-gray-500 outline-none"
              />
            </div>
            {errors.confirmPassword && (
              <p className="text-red-400 text-xs mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-lg mt-4 bg-white/10 text-white border border-white/20 hover:bg-white/20 transition"
          >
            SIGN UP
          </button>
        </form>

        <p className="text-sm text-gray-400 text-center mt-6">
          Already have an account?{" "}
          <Link to="/" className="text-white hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;