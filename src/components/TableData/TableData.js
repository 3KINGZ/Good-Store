import React from "react";
import { useDispatch } from "react-redux";

function TableData({ product, dele }) {
  const dispatch = useDispatch();

  return (
    <tr>
      <td>
        <img src={product.image} alt={product.title} width={50} />
      </td>
      <td>{product.title}</td>
      <td>{product.quantity}</td>
      <td>{product.price}</td>
      <td
        style={{ cursor: "pointer" }}
        onClick={() => dispatch(dele(product.id))}
      >
        X
      </td>
    </tr>
  );
}

export default TableData;
