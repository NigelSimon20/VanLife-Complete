import "./App.css";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Host from "./Pages/Host.js";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home.js";
import About from "./Pages/About.js";
import Vans from "./Pages/Vans.js";
import AnimatedPages from "./Pages/AnimatedPages.js";
import ModestExplorer from "./Pages/ModestExplorer.js";
import BeachBum from "./Pages/BeachBum.js";
import Dreamfinder from "./Pages/Dreamfinder.js";
import GreenWonder from "./Pages/GreenWonder.js";
import ReliableRed from "./Pages/ReliableRed.js";
import TheCruiser from "./Pages/TheCruiser.js";
import SignUp from "./Pages/SignUp.js";
import Dashboard from "./Pages/Dashboard.js";
import Forms from "./Pages/Forms.js";



import DashboardLayout from "./Components/DashLayout.js";
import TabzModest from "./Pages/TabzModest.js";
import VanChatbot from "./Components/VanChatbot.js";
import TabzBeachBum from "./Pages/TabzBeachBum.js";
import TabzGreenWonder from './Pages/TabzGreenWonder.js'
import Lists from "./Pages/List.js";

function App() {
  return (
    <AnimatedPages>
      <div className="App">
        <Navbar />
        <VanChatbot/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="Home" element={<Home />}></Route>
          <Route path="Host" element={<Host />}></Route>
          <Route path="About" element={<About />}></Route>
          <Route path="Vans" element={<Vans />}></Route>
          <Route path="ModestExplorer" element={<ModestExplorer />}></Route>
          <Route path="BeachBum" element={<BeachBum />}></Route>
          <Route path="Dreamfinder" element={<Dreamfinder />}></Route>
          <Route path="GreenWonder" element={<GreenWonder />}></Route>
          <Route path="ReliableRed" element={<ReliableRed />}></Route>
          <Route path="TheCruiser" element={<TheCruiser />}></Route>
          <Route path="SignUp" element={<SignUp />}></Route>
          <Route path="Dashboard" element={<Dashboard />}></Route>
          <Route path="Forms" element={<Forms />}></Route>
         
          
         
          <Route path="/" element={<DashboardLayout />}></Route>
          <Route path="TabzModest" element={<TabzModest />}></Route>
          <Route path="TabzBeachBum" element={<TabzBeachBum />}></Route>
          <Route path="GreenWonder" element={<GreenWonder />}></Route>
          <Route path="TabzGreenWonder" element={<TabzGreenWonder />}></Route>
          <Route path="Lists" element={<Lists />}></Route>
        </Routes>
        <Footer />
      </div>
    </AnimatedPages>
  );
}

export default App;
