import { useDispatch } from "react-redux";
import classes from "./CartButton.module.css";
import { storeActions } from "../../store/redux";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const cartHandler = () => {
    dispatch(storeActions.showCart());
  };

  return (
    <button onClick={cartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
