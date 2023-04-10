import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { storeActions } from "../../store/storeSlice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, totalPrice, price, id } = props.item;

  const removeOneHandler = () => {
    dispatch(storeActions.removeItemFromCart({ id: id, price: price }));
  };
  const addOneHandler = () => {
    dispatch(
      storeActions.addItemToCart({
        title: title,
        price: price,
        id: id,
      })
    );
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeOneHandler}>-</button>
          <button onClick={addOneHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
