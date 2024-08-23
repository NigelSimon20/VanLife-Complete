import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import AnimatedPages from "./AnimatedPages";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User created:", user);

      await updateProfile(user, {
        displayName: username,
      });
      console.log("Username updated successfully!");

      navigate("/Forms");
    } catch (error) {
      console.error("Error signing up:", error.message);

      alert("Sign up failed: " + error.message);
    }
  };

  return (
    <AnimatedPages>
      <div className="flex flex-col justify-center items-center h-[84vh] md:h-[82.5vh] space-y-2 bg-lightPink">
        <h2 className="font-bold text-2xl pb-5">Sign up</h2>
        <form
          onSubmit={handleSignUp}
          className="w-full max-w-sm flex flex-col justify-center items-center"
        >
          <input
            type="text"
            placeholder="Username"
            className="border-solid border-2 outline-none w-[80%] rounded-md p-2 mb-4"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="border-solid border-2 outline-none w-[80%] rounded-md p-2 mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="border-solid border-2 outline-none w-[80%] rounded-md p-2 mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-[80%] p-2 rounded-md text-white font-semibold bg-orange transition-transform transform active:scale-95 hover:scale-105"
          >
            Sign Up
          </button>
        </form>
        <div className="flex space-x-2 pt-6">
          <p>Already have an account?</p>
          <Link to="/Forms" className="text-orange font-semibold">
            Login
          </Link>
        </div>
      </div>
    </AnimatedPages>
  );
};

export default SignUp;
