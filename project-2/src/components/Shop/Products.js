import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const products = [
    {
      id: "id1",
      title: "Test",
      price: 6,
      description: "This is a first product - amazing!",
    },
    {
      id: "id2",
      title: "Test2",
      price: 7,
      description: "This is a second product - amazing!",
    },
  ];
  const productsContent = products.map((item) => {
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
