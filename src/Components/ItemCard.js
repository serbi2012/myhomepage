import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../store";

function ItemCard() {
  const Items = useSelector((state) => {
    return state.ItemList;
  });
  const dispatch = useDispatch();

  return (
    <>
      {Items.map((value, i) => {
        return (
          <Card>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + `/Images/Item_img${i}.jpg`}
            />
            <Card.Body>
              <Card.Title>{Items[i].name}</Card.Title>
              <Card.Text>{Items[i].contents}</Card.Text>
              <div className="Card-BtnContainer">
                <Button
                  variant="primary"
                  onClick={() => {
                    dispatch(AddToCart(Items[i]));
                  }}
                >
                  Add to Cart
                </Button>
                <div className="Card-BtnContainer-Price">
                  {Items[i].price} 원
                </div>
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}

export { ItemCard };
