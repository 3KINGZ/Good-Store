import React from "react";
import TableData from "../../components/TableData/TableData";
import "./Table.scss";

function Table({ products, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Products</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <TableData product={product} key={product.id} dele={onDelete} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
