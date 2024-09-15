import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import AnimatedPages from "./AnimatedPages";

const Forms = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in successfully!");

      navigate("/Host");
    } catch (error) {
      console.error("Error signing in:", error.message);

      alert("Sign in failed: " + error.message);
    }
  };

  return (
    <AnimatedPages>
      <div className="bg-lightPink shadow-3xl flex items-center h-[84vh] md:h-[82.5vh]  justify-center ">
        <div className=" w-full flex items-center justify-center md:w-[30%]  rounded-lg ">
          <div className="w-full">
            <h1 className="text-2xl  font-bold text-center mb-8">
              Sign in to your account
            </h1>
            <form onSubmit={handleSignIn}>
              <div className="mb-4">
                <input
                  id="email"
                  type="email"
                  className="w-full border-solid border-2 outline-none rounded-md p-2 mt-1 bg-white"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  id="password"
                  type="password"
                  className="w-full border-solid border-2 outline-none rounded-md p-2 mt-1 bg-white"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mt-5 flex flex-col gap-y-4">
                <button
                  type="submit"
                  className="w-full py-2 rounded-md bg-orange text-white text-md font-semibold transition-transform transform active:scale-95 hover:scale-105"
                >
                  Sign In
                </button>
              </div>
              <div className="mt-8 flex justify-center items-center">
                <p className="font-medium">Don't have an account?</p>
                <Link
                  to="/SignUp"
                  className="text-orange text-base font-medium pl-2"
                >
                  Create one now
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AnimatedPages>
  );
};

export default Forms;
