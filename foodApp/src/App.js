import Nav from "./components/UI/Nav";
import Home from "./components/UI/Home";
import About from "./components/UI/About";
import Cart from "./components/UI/Cart";

import Menu from "./components/Menu";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/About" element={<About />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
