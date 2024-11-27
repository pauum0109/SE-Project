"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (status === "authenticated") {
    router.push("/")
  }
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (isLogin) {
      // Login logic
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (result?.error) {
        setError(result.error);
      } else {
        router.push("/");
      }
    } else {
      // Signup logic
      try {
        const res = await fetch("/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        const data = await res.json();
        if (res.ok) {
          setIsLogin(true); // Switch to login form after successful signup
        } else {
          setError(data.error || "Signup failed");
        }
      } catch (err) {
        setError("Something went wrong, please try again.");
      }
    }
    setLoading(false);
  };

  return (
      <div className="p-4 min-h-screen flex items-center justify-center bg-gray-100">
        <div className="shadow-lg rounded-lg flex flex-col md:flex-row w-full max-w-3xl bg-white">
          {/* IMAGE CONTAINER */}
          <div className="relative h-40 w-full md:h-auto md:w-1/2">
            <Image
                src="/login.jpg"
                alt="Login Image"
                fill
                className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
            />
          </div>

          {/* FORM CONTAINER */}
          <div className="p-8 flex flex-col gap-6 md:w-1/2">
            <h1 className="font-bold text-2xl">{isLogin ? "Welcome Back" : "Create an Account"}</h1>
            <p className="text-gray-600">
              {isLogin ? "Log in to your account" : "Sign up for a new account"}
            </p>

            {/* Error message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* FORM */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
              />
              <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
              />
              <button
                  type="submit"
                  className={`p-3 rounded-md text-white ${
                      loading ? "bg-blue-400" : "bg-blue-500 hover:bg-blue-600"
                  } transition`}
                  disabled={loading}
              >
                {loading ? "Processing..." : isLogin ? "Log In" : "Sign Up"}
              </button>
            </form>

            {/* OR SEPARATOR */}
            <div className="flex items-center gap-2 mt-4">
              <div className="border-b border-gray-300 w-full"></div>
              <span className="text-sm text-gray-500">OR</span>
              <div className="border-b border-gray-300 w-full"></div>
            </div>

            {/* SIGN IN WITH GOOGLE */}
            <button
                className="flex items-center gap-4 p-3 ring-1 ring-gray-300 rounded-md hover:bg-gray-50 transition"
                onClick={() => signIn("google")}
            >
              <Image
                  src="/google.png"
                  alt="Google Logo"
                  width={24}
                  height={24}
                  className="object-contain"
              />
              <span className="text-gray-800 font-medium">Sign in with Google</span>
            </button>

            {/* TOGGLE LOGIN/SIGNUP */}
            <div className="flex justify-center mt-4">
              <button
                  className="text-blue-500 hover:underline"
                  onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin
                    ? "Don't have an account? Sign Up"
                    : "Already have an account? Log In"}
              </button>
            </div>

            {/* CONTACT SUPPORT */}
            <p className="text-sm text-gray-600 mt-4">
              Have a problem?{" "}
              <Link className="underline text-blue-500" href="/">
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </div>
  );
};

export default LoginPage;
