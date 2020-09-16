import React from "react";
import Holder from "../../components/Holder/Holder";
import Table from "../../components/Table/Table";
import womenClothes from "../../assets/data/women/womenClothes";
import NoItem from "../../components/NoItem/NoItem";
import "./WishList.scss";

function Favourite() {
  return (
    <Holder>
      <h3>My WishList</h3>
      {!womenClothes.length ? (
        <NoItem container="wishlist" />
      ) : (
        <Table products={womenClothes} />
      )}
    </Holder>
  );
}

export default Favourite;
