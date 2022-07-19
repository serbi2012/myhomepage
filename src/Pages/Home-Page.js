import { Button } from "react-bootstrap";
import { HoemCarousel } from "../Components/Home-Carousel";

function HomePage() {
  return (
    <div className="Home-Main-Container d-flex flex-column">
      <div className="Home-Title m-5">
        <p>Devaloper RiAXO</p>
      </div>
      <HoemCarousel />
      <div className="Home-Link-Container">
        <Button variant="secondary" href="/Cart" className="Home-Link">
          Cart
        </Button>
        <Button variant="secondary" href="/Portpolio" className="Home-Link">
          Portpolio
        </Button>
        <Button variant="secondary" href="/About" className="Home-Link">
          About
        </Button>
      </div>
    </div>
  );
}

export { HomePage };
