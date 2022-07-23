import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setItemQuantity } from "../store";

function BillTable() {
  const dispatch = useDispatch();
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
              <td>{ItemInCart[i].price.toLocaleString("ko-KR")}원</td>
              <td>
                <input
                  type={"number"}
                  value={ItemInCart[i].quantity}
                  min={0}
                  onChange={(e) => {
                    dispatch(setItemQuantity([ItemInCart[i], e.target.value]));
                  }}
                  style={{ width: "5vmin" }}
                ></input>
              </td>
              <td>
                {(ItemInCart[i].price * ItemInCart[i].quantity).toLocaleString(
                  "ko-KR"
                )}
                원
              </td>
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

    return result.toLocaleString("ko-KR");
  }

  return <>{Total()}</>;
}

export { BillTable };
