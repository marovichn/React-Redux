import { useDispatch, useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { storeActions } from "../../store/redux";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.totalItems);
  const totalPrice = useSelector((state) => state.totalPrice);
  const { title, price, description, id } = props;

  const addToCartHandler = () => {
    dispatch(
      storeActions.addToCart({
        title: title,
        price: price,
        id: id,
        quantity: quantity,
        total: totalPrice,
        key: id,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
