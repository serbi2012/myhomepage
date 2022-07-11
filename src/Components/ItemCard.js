import { Button, Card } from "react-bootstrap";
import { ItemData } from "../Data/Items-Data";

function ItemCard() {
  return (
    <>
      {ItemData.map((value, i) => {
        return (
          <Card>
            <Card.Img variant="top" src={`/Images/Item_img${i}.jpg`} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}

export { ItemCard };
