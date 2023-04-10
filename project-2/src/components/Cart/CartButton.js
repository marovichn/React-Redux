import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { uiActions } from "../../store/uiSlice";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const cartHandler = () => {
    dispatch(uiActions.showCart());
  };

  return (
    <button onClick={cartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{/* {totalAmount} */}</span>
    </button>
  );
};

export default CartButton;
