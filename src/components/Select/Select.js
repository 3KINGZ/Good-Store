import React from "react";
import "./Select.scss";

export function ClothSelect() {
  return (
    <select>
      <option value="medium">M</option>
      <option value="large">L</option>
      <option value="extra-large">XL</option>
      <option value="extra-extra-large">XXL</option>
    </select>
  );
}

export function ShoeSelect() {
  return (
    <select>
      <option value="41">41</option>
      <option value="42">42</option>
      <option value="43">43</option>
      <option value="45">45</option>
    </select>
  );
}
