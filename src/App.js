import "./App.scss";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";
import Cursor from "./components/Cursor/CursorCursor";
import Cursors from "./components/Cursor/Cursors";
import gsap from "gsap";
import { AnimatePresence } from "framer-motion";
import Developer from "./pages/Developer/Developer";

function App() {
  window.onload = () => {
    gsap.from(document.body, {
      opacity: 0,
      duration: 1,
      ease: "Power3.easeInOut",
    });
    let cursor = new Cursor(document.getElementsByClassName("cursor")[0]);
  };

  return (
    <div>
      <Cursors />
      <AnimatePresence>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/developer" element={<Developer />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/dm" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </div>
  );
}

export default App;
