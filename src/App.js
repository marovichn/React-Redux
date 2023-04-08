import Counter from "./components/Counter";
import Auth from "./components/Auth";
/* import UserProfile from "./components/UserProfile"; */
import Header from "./components/Header";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Auth />
      {/* <UserProfile /> */}
      <Counter />
    </React.Fragment>
  );
}

export default App;
