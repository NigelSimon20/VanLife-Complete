// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import Component from "../Components/Component";
// import one from "../img/van1.png";
// import two from "../img/van2.png";
// import three from "../img/van3.png";
// import { auth } from "../firebase";
// import { onAuthStateChanged } from "firebase/auth";
// import List from "./List";
// import { Link } from "react-router-dom";
// import Barchart from "../Components/BarChart";
// import Amount from "../Components/Amount";
// import Overal from "../Components/Overal";
// import Reviews from "../Components/Reviews";

// function Tabs(props) {
//   const [activeTab, setActiveTab] = useState(0);
//   const [user, setUser] = useState(null); 

//   useEffect(() => {
    
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       if (currentUser) {
//         setUser(currentUser);
//       } else {
//         setUser(null);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   const images = [
//     {
//       src: one,
//       alt: "first van",
//       type: "Modest Explorer",
//       customize: "Edit",
//       prices: "$60/day",
//     },
//     {
//       src: two,
//       alt: "second van",
//       type: "Beach Bum",
//       customize: "Edit",
//       prices: "$80/day",
//     },
//     {
//       src: three,
//       alt: "third van",
//       type: "Green Wonder",
//       prices: "$70/day",
//       customize: "Edit",
//     },
//   ];

//   const tabs = ["Dashboard", "Income", "Vans", "Reviews"];
//   const content = [
//     // Dashboard

//     <div className="font-variant bg-[#fff7ed]">
//       <div className="space-y-4 bg-[#FFEAD0] p-5">
//         <h1 className="font-bold text-[25px] pt-3 md:text-4xl">
//           Welcome{user ? `, ${user.displayName || user.email}` : "!"}
//         </h1>
//         <div className="flex justify-between">
//           <div className="flex space-x-1">
//             <p>Income last</p>
//             <div className="font-semibold">
//               <p className="">30 days</p>
//             </div>
//           </div>
//           <Link className="font-semibold md:text-[15px]">Details</Link>
//         </div>
//         <h2 className="mt-2 text-4xl font-inters font-bold">$2,260</h2>
//       </div>
//       <div className="flex p-5 py-10 bg-[#FFDDB2] justify-between items-center">
//         <div className="flex space-x-2 items-center">
//           <h1 className=" font-variant text-lg font-bold">Review score</h1>
//           <div className="flex items-center space-x-1">
//             <FontAwesomeIcon
//               icon={faStar}
//               className="text-xs text-[#FF8C38]"
//             />
//             <p className="font-variant font-bold">5.0</p>
//             <p className="font-variant">/5</p>
//           </div>
//         </div>
//         <div>
//         <Link className="font-semibold text-[15px]">Details</Link>
//         </div>
//       </div>
//       <div className="flex justify-between items-center px-6 py-10">
//         <h1 className="text-xl md:text-3xl font-bold">Your listed vans</h1>
//         <p className="flex text-xs font-bold md:text-[15px]">View all</p>
//       </div>

//       <Component images={images} />
//     </div>,

//     // Income Section

//     <div className="w-full p-5">
//       <div className="space-y-3 font-variant text-lightGray">
//         {/* Income Heading */}
//         <h2 className="font-bold text-2xl pb-2">Income</h2>

//         {/* Income dates breakdown */}
//         <div className="flex space-x-1">
//           <p className="text-xs">Last</p>
//           <div className="flex flex-col">
//             <Link className="font-semibold text-xs">30 days</Link>
//             <hr className="bg-lightGray" />
//           </div>
//         </div>

//         {/* Amount */}
//         <h2 className="font-extrabold text-3xl">$2,260</h2>

//         {/* BarChart And Transactions Div */}
//         <div className="flex flex-col space-y-3 md:w-[40%]">
//           {/* Barchart */}
//           <Barchart />

//           {/* Transactions Breakdown */}
//           <div className="flex justify-between">
//             <p className="font-bold text-[18px]">Your transactions (3)</p>
//             <div className="flex space-x-1 items-center">
//               <p className="text-xs">Last</p>
//               <div className="flex flex-col">
//                 <Link className="font-semibold text-xs ">30 days</Link>
//                 <hr className="bg-lightGray" />
//               </div>
//             </div>
//           </div>

//           {/* Amounts And Dates */}
//           <Amount amount="$720" date={"1/12/22"} />
//           <Amount amount="$560" date={"10/11/22"} />
//           <Amount amount="$980" date={"23/11/22"} />
//         </div>
//       </div>
//     </div>,

//     // Vans Section

//     <div className="p-5">
//       <List />
//     </div>,

//     // Reviews Section

//     <div className=" space-y-2 bg-[#FFF7ED] font-variant p-5">
//       <div className="flex space-x-2 items-baseline">
//         <h1 className="font-bold text-2xl">Your reviews</h1>
//         <p>last 30 days</p>
//       </div>
//       <div className="flex space-x-1 items-center">
//         <h2 className="font-bold text-2xl ">5.0</h2>
//         <FontAwesomeIcon icon={faStar} className="text-[#FF8C38]" />
//         <p>overall rating</p>
//       </div>
//       <div className="flex space-x-4 items-center ">
//         <p className="text-sm">5 stars</p>
//         <div className="bg-[#FF8C38] h-1 w-[61%] rounded-md"></div>
//         <p className="text-xs">100%</p>
//       </div>
//       <Overal overall="4 stars" percentage="0%" />
//       <Overal overall="3 stars" percentage="0%" />
//       <Overal overall="2 stars" percentage="0%" />
//       <Overal overall="1 stars" percentage="0%" />

//       <h3 className="font-bold pt-3">Reviews (2)</h3>
//       <div className="flex space-x-1"></div>
//       <Reviews
//         name="Elliot"
//         date="December 1, 2022"
//         description="The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!"
//       />
//       <Reviews
//         name="Sandy"
//         date="November 23, 2022"
//         description="This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!"
//       />
//     </div>,
//   ];

//   return (
//     <div className={`pt-6 ${props.style} bg-lightPink `}>
//       <div className="flex sm:flex-row space-x-4 p-5">
//         {tabs.map((tab, index) => (
//           <button
//             key={index}
//             className={`py-2  text-center transition-colors duration-300 ${
//               activeTab === index
//                 ? "border-b-2 border-black text-black"
//                 : "border-b-2 border-transparent text-gray-500"
//             } focus:outline-none`}
//             onClick={() => setActiveTab(index)}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>
//       <div className="w-full pt-5 pb-5 text-sm sm:text-base md:text-lg lg:text-xl">
//         {content[activeTab]}
//       </div>
//     </div>
//   );
// }

// export default Tabs;
