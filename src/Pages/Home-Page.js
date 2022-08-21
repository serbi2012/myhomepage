import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { HoemCarousel } from "../Components/Home-Carousel";

function HomePage() {
  return (
    <div className="Home-Main-Container d-flex flex-column">
      <div className="Home-Title m-5">
        <p>Devaloper RiAXO</p>
      </div>
      <HoemCarousel />
      <div className="Home-Link-Container">
        <NavLink to="/Cart">
          <Button variant="secondary" className="Home-Link">
            Cart
          </Button>
        </NavLink>
        <NavLink to="/Portpolio">
          <Button variant="secondary" className="Home-Link">
            Portpolio
          </Button>
        </NavLink>
        <NavLink to="/About">
          <Button variant="secondary" className="Home-Link">
            About
          </Button>
        </NavLink>
      </div>
    </div>
  );
}

export { HomePage };
