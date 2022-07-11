import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { MainNavbar } from "./Components/Main-Navbar";

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <div className="Home-Main-Container">
        <div className="Home-Title">
          <p>Devaloper</p>
          <p>RiAXO</p>
        </div>
      </div>
    </div>
  );
}

export default App;
