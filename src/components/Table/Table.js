import React from "react";
import TableData from "../../components/TableData/TableData";
import "./Table.scss";

function Table({ products }) {
  return (
    <table>
      <tr>
        <th>Products</th>
        <th>Name</th>
        {/* <th>Quantity</th> */}
        <th>Price</th>
        <th>Delete</th>
      </tr>
      {products.map((product) => (
        <TableData product={product} />
      ))}
    </table>
  );
}

export default Table;
