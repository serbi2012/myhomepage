import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

function PortpolioCard() {
  const Items = useSelector((state) => {
    return state.PortpolioItems;
  });

  return (
    <>
      {Items.map((value, i) => {
        return (
          <Card>
            <Card.Img
              variant="top"
              src={`/Images/Portpolio_img${Items[i].id}.jpg`}
              className="p-2"
            />
            <Card.Body>
              <Card.Title>{Items[i].name}</Card.Title>
              <Card.Text>{Items[i].contents}</Card.Text>
              <Button
                className="Portpolio-Btn"
                variant="primary"
                href={Items[i].link}
              >
                Start to Play
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}

export { PortpolioCard };
