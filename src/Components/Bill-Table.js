import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function BillTable() {
  const ItemInCart = useSelector((state) => {
    return state.ItemInCart;
  });

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>상품</th>
          <th>가격</th>
          <th>개수</th>
          <th>총 가격</th>
        </tr>
      </thead>
      <tbody>
        {ItemInCart.map((value, i) => {
          return (
            <tr>
              <td>{ItemInCart[i].name}</td>
              <td>{ItemInCart[i].price}</td>
              <td>{ItemInCart[i].quantity}</td>
              <td>{ItemInCart[i].price * ItemInCart[i].quantity}원</td>
            </tr>
          );
        })}
        <tr>
          <td className="TotalPriceContainer" colSpan={4}>
            총 가격 <TotalPrice />원
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

function TotalPrice() {
  const ItemInCart = useSelector((state) => {
    return state.ItemInCart;
  });

  function Total(params) {
    let result = 0;

    for (let i = 0; i < ItemInCart.length; i++) {
      result += ItemInCart[i].quantity * ItemInCart[i].price;
    }

    return result;
  }

  return <>{Total()}</>;
}

export { BillTable };
