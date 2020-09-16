import React from "react";

function TableData({ product }) {
  return (
    <tr>
      <td>
        <img src={product.image} alt={product.title} width={50} />
      </td>
      <td>{product.title}</td>
      <td>{product.price}</td>
      <td style={{ cursor: "pointer" }}>X</td>
    </tr>
  );
}

export default TableData;
