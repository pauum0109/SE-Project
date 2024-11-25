"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    setLoading(true);

    try {
      const url = isLogin ? "/api/login" : "/api/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      console.log(data);
      alert(isLogin ? "Login successful!" : "Sign-up successful!");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "An error occurred. Please try again.");
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
      <div className="p-4 h-screen flex items-center justify-center bg-gray-50">
        <div className="shadow-2xl rounded-lg flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
          {/* IMAGE CONTAINER */}
          <div className="relative h-40 md:h-auto w-full md:w-1/2">
            <Image
                src="/login.jpg"
                alt="Login Image"
                fill
                className="object-cover"
            />
          </div>
          {/* FORM CONTAINER */}
          <div className="p-8 flex flex-col gap-6 w-full md:w-1/2 overflow-auto">
            <h1 className="font-bold text-2xl xl:text-3xl">
              {isLogin ? "Welcome Back" : "Create an Account"}
            </h1>
            <p>
              {isLogin ? "Log in to your account" : "Sign up for a new account"}
            </p>

            {/* Error message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="p-4 border rounded-md"
                  required
              />
              <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="p-4 border rounded-md"
                  required
              />
              <button
                  type="submit"
                  className="bg-blue-500 text-white p-4 rounded-md hover:bg-blue-600 transition disabled:opacity-50"
                  disabled={loading}
              >
                {loading ? "Processing..." : isLogin ? "Log In" : "Sign Up"}
              </button>
            </form>

            <div className="flex justify-center gap-4 mt-2">
              <button
                  className="text-blue-500 hover:underline"
                  onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin
                    ? "Don't have an account? Sign Up"
                    : "Already have an account? Log In"}
              </button>
            </div>

            <p className="text-sm mt-4">
              Have a problem?{" "}
              <Link className="underline" href="/">
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </div>
  );
};

export default LoginPage;
