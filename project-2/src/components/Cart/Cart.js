import { useSelector } from "react-redux";
import React from "react";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartContent = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  return (
    <React.Fragment>
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>{cartContent}</ul>
      </Card>
    </React.Fragment>
  );
};

export default Cart;
