import "./App.css";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Host from "./Pages/Host.js";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home.js";
import About from "./Pages/About.js";
import Vans from "./Pages/Vans.js";
import AnimatedPages from "./Pages/AnimatedPages.js";


function App() {
  return (
    <AnimatedPages>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="Home" element={<Home />}></Route>
          <Route path="Host" element={<Host />}></Route>
          <Route path="About" element={<About />}></Route>
          <Route path="Vans" element={<Vans />}></Route>
        </Routes>
        <Footer />
      </div>
    </AnimatedPages>
  );
}

export default App;
