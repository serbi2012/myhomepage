import { Button, Card } from "react-bootstrap";
import { BillTable } from "../Components/Bill-Table";

function CartPage() {
  return (
    <div className="Cart-Main_Container">
      <div className="Item-List">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="Bill-Container">
        <BillTable />
      </div>
    </div>
  );
}

export { CartPage };
