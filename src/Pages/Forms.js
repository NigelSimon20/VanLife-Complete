// import React from "react";
// import { Link } from "react-router-dom";

// const Forms = () => {
//   return (
//     <div>
//       <div className=" bg-FFF7ED flex items-center justify-center ">
//         <div className=" bg-fff7ed w-full flex items-center justify-center lg:w-1/2">
//           <div className="">
//             <h1 className="text-4xl font-medium  items-center justify-center">
//               {" "}
//               Sign in to your account
//             </h1>

//             <div className="mt-8 ">
//               <div>
//                 <label className="text-lg font-medium"></label>
//                 <input
//                   className="w-full border-2 border-gray-500 rounded-md p-3 mt-1 bg-white"
//                   placeholder="Email"
//                 />
//               </div>
//               <div>
//                 <label className="text-lg font-medium bordert-none"></label>
//                 <input
//                   className="w-full border-2 border-gray-500 rounded-md p-3  bg-white "
//                   placeholder=" Password"
//                 />
//               </div>

//               <div className="mt-5 flex flex-col gap-y-4">
//                 <Link to='/Dashboard'  className="active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all text-center  py-3 rounded-xl bg-orange text-white text-lg font-bold">
//                   {" "}
//                   <button className="">
//                     Sign in
//                   </button>
//                 </Link>
//               </div>
//               <div className="mt-8 flex justify-center items-center">
//                 <p className="font-medium">Don't have an account?</p>
//                 <button className="text-orange text-base font-medium pl-2">
//                   {" "}
//                   <Link to='/SignUp'>Create one now </Link>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* sign up .......*/}
//     </div>
//   );
// };

// export default Forms;

// src/Pages/Forms.js
import React, { useState } from "react";
import { auth } from "../firebase"; // Import the auth instance from firebase.js
import { signInWithEmailAndPassword } from "firebase/auth"; // Import the necessary Firebase function
import { useNavigate, Link } from "react-router-dom";

const Forms = () => {
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const navigate = useNavigate(); // For navigation after sign-in

  const handleSignIn = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    try {
      // Sign in the user with email and password
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in successfully!");

      // Redirect to another page (e.g., dashboard)
      navigate("/Dashboard");
    } catch (error) {
      console.error("Error signing in:", error.message);
      // Optionally, display an error message to the user
      alert("Sign in failed: " + error.message);
    }
  };

  return (
    <div className="bg-FFF7ED flex items-center justify-center min-h-screen">
      <div className="bg-fff7ed w-full flex items-center justify-center lg:w-1/2 p-6 rounded-lg shadow-lg">
        <div className="w-full">
          <h1 className="text-4xl font-medium text-center mb-8">Sign in to your account</h1>
          <form onSubmit={handleSignIn}>
            <div className="mb-4">
              <label className="text-lg font-medium" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className="w-full border-2 border-gray-500 rounded-md p-3 mt-1 bg-white"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label className="text-lg font-medium" htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                className="w-full border-2 border-gray-500 rounded-md p-3 mt-1 bg-white"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mt-5 flex flex-col gap-y-4">
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-orange text-white text-lg font-bold transition-transform transform active:scale-95 hover:scale-105"
              >
                Sign In
              </button>
            </div>
            <div className="mt-8 flex justify-center items-center">
              <p className="font-medium">Don't have an account?</p>
              <Link to="/SignUp" className="text-orange text-base font-medium pl-2">
                Create one now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forms;
