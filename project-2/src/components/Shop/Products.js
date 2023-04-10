import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "id1",
    title: "Book",
    price: 6,
    description: "This is a first product - amazing!",
  },
  {
    id: "id2",
    title: "Ball",
    price: 7,
    description: "This is a second product - amazing!",
  },
];
const Products = (props) => {
  const productsContent = DUMMY_PRODUCTS.map((item) => {
    return <ProductItem key={item.id} title={item.title} item={item} />;
  });
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{productsContent}</ul>
    </section>
  );
};

export default Products;
