import React, {useState } from "react";
import "./App.css";
import Header from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";
import Cart from "./component/Cart/Cart";
import CardProvider from "./store/CardProvider";

function App() {
  const [cartIsShown,setCartIsShown]=useState(false);

  const CartShowHandler=()=>{
    setCartIsShown(true)
  }
  const CartHidHandler=()=>{
    setCartIsShown(false)
  }

  return (
    <CardProvider>
     {cartIsShown && <Cart onClose={CartHidHandler}/>} 
      <Header onCartShow={CartShowHandler}/>
      <main>
        <Meals/>
      </main>
    </CardProvider>
  );
}

export default App;