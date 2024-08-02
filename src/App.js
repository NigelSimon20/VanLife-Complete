import "./App.css";
import Footer from './Components/Footer'
import { Route, Routes } from "react-router-dom";
import Host from "./Pages/Host.js";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home.js";
import About from './Pages/About.js'
import Vans from "./Pages/Vans.js";

function App() {
  return (
      <div className="App">
           <Navbar />
        <Routes>
          <Route path="Host" element={<Host />}></Route>
          <Route path="About" element={<About/>}></Route>
          <Route path="Vans" element={<Vans/>}></Route>
          <Route path="Home" element={<Home/>}></Route>
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;
