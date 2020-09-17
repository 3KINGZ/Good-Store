import React from "react";
import { useSelector } from "react-redux";
import Holder from "../../components/Holder/Holder";
import Table from "../../components/Table/Table";
import NoItem from "../../components/NoItem/NoItem";
import { deleteFromWishList } from "../../redux/wishList/wishListActions";
import "./WishList.scss";

function Favourite() {
  const wishList = useSelector((state) => state.wishList.wishList);

  return (
    <Holder>
      <h3>My WishList</h3>
      {!wishList.length ? (
        <NoItem container="wishlist" />
      ) : (
        <Table products={wishList} onDelete={deleteFromWishList} />
      )}
    </Holder>
  );
}

export default Favourite;
