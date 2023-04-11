import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";

function App() {
  const showCart = useSelector((state) => state.ui.showCart);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    fetch(
      "https://simple-react-app-2b7b6-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
      {
        method: "PUT",
        body: JSON.stringify(cart),
        headers: {
          "Content-Type": "app/json",
        },
      }
    );
  }, [cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
