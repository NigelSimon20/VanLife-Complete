// import React from "react";
// import { Link } from "react-router-dom";

// const SignUp = () => {
//   return (
//     <div className="flex flex-col justify-center items-center h-[84vh] md:h-[82.5vh] space-y-2 bg-lightPink">
//       <h2 className="font-bold text-3xl pb-5">Sign up </h2>
//       <input
//         type="text"
//         placeholder="Username"
//         className="border-solid border-2 outline-none  w-[90%] md:w-[50%]  rounded-md p-2"
//       />
//       <input
//         type="Email"
//         placeholder="Email"
//         className="border-solid border-2 outline-none w-[90%] md:w-[50%] rounded-md p-2"
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         className="border-solid border-2 outline-none w-[90%] md:w-[50%] rounded-md p-2"
//       />
//       <button className="w-[90%] md:w-[50%] p-2 rounded-md text-white font-semibold bg-orange ">
//         SignUp
//       </button>
//       <div className="flex space-x-2 pt-6">
//         <p>Already have an account?</p>
//         <Link to="/Forms" className="text-orange font-semibold">
//           Login
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

// src/Pages/SignUp.js
// src/Pages/SignUp.js
// src/Pages/SignUp.js
import React, { useState } from "react";
import { auth } from "../firebase"; // Import the auth instance from firebase.js
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"; // Import necessary functions
import { useNavigate, Link } from "react-router-dom";


const SignUp = () => {
  const [username, setUsername] = useState(""); // State for username
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const navigate = useNavigate(); // For navigation after sign-up

  const handleSignUp = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    try {
      // Create a new user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User created:", user);

      // Update the user's profile with the username
      await updateProfile(user, {
        displayName: username,
      });
      console.log("Username updated successfully!");

      // Redirect to another page (e.g., dashboard)
      navigate("/Forms");
    } catch (error) {
      console.error("Error signing up:", error.message);
      // Optionally, display an error message to the user
      alert("Sign up failed: " + error.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-[84vh] md:h-[82.5vh] space-y-2 bg-lightPink">
      <h2 className="font-bold text-3xl pb-5">Sign up</h2>
      <form onSubmit={handleSignUp} className="w-full max-w-sm">
        <input
          type="text"
          placeholder="Username"
          className="border-solid border-2 outline-none w-full rounded-md p-2 mb-4"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email" // Use type "email" for email validation
          placeholder="Email"
          className="border-solid border-2 outline-none w-full rounded-md p-2 mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border-solid border-2 outline-none w-full rounded-md p-2 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit" // Button triggers form submission
          className="w-full p-2 rounded-md text-white font-semibold bg-orange"
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
  );
};

export default SignUp;


