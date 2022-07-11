import { Table } from "react-bootstrap";

function BillTable() {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>상품</th>
          <th>이미지</th>
          <th>가격</th>
          <th>개수</th>
          <th>총 가격</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@fat</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@fat</td>
          <td>@fat</td>
        </tr>
      </tbody>
    </Table>
  );
}

export { BillTable };
