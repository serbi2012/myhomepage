import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { MainNavbar } from "./Components/Main-Navbar";
import { Link, Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/Home-Page";
import { CartPage } from "./Pages/Cart-Page";
import { PortpolioPage } from "./Pages/PortpolioPage";

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Cart" element={<CartPage />} />
        <Route path="/Portpolio" element={<PortpolioPage />} />
        <Route path="/About" element={<div>어바웃 페이지임</div>} />
      </Routes>
    </div>
  );
}

export default App;
