import { Pagination } from "react-bootstrap";
import { BillTable } from "../Components/Bill-Table";
import { ItemCard } from "../Components/ItemCard";

function CartPage() {
  return (
    <div className="Cart-Main_Container">
      <div className="Item-List">
        <ItemCard />
      </div>
      <div className="Bill-Container">
        <BillTable />
      </div>
    </div>
  );
}

export { CartPage };
