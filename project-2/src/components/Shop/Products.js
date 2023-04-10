import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const products = useSelector((state) => state.items);
  const productsContent = products.map((item) => {
    return (
      <ProductItem
        title={item.title}
        price={item.price}
        description={item.description}
        id={item.id}
        key={item.id}
      />
    );
  });
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{productsContent}</ul>
    </section>
  );
};

export default Products;
