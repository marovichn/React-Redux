import React, { useContext } from "react";

import ProductItem from "../components/Products/ProductItem";
import "./Products.css";
import { useStore } from "../hooks-store/store";

const Products = () => {
  const [state, dispatch] = useStore();
  const productList = state.products;
  return (
    <ul className="products-list">
      {productList.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
