import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Cards from "../Cards/cards.js";
import Drawer from "@mui/material/Drawer";
import Basket from "../Basket/basket";

function App() {
  const [data, setData] = useState();
  const [basket, setBasket] = useState([]);
  const [cart, setCart] = useState();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`https://fakestoreapi.com/products`);
      const data = await res.json();
      setData(data);
      console.log(data);
    };
    getData();
  }, []);

  function addToBasket(id) {
    let foundItem = data.find((item) => {
      if (item.id === id) {
        return item;
      }
    });
    setBasket((basket) => [...basket, foundItem]);
  }
  console.log(basket);

  return (
    <div className="App">
      <h3>My Shop!</h3>
      <Drawer anchor="right" open={cart} onClose={() => setCart(false)}>
        Your Shopping Cart!
        <Basket basket={basket} />
      </Drawer>
      <button onClick={() => setCart(true)}>Open Cart</button>
      {data
        ? data.map((item) => {
            return (
              <Cards
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                addToBasket={addToBasket}
              />
            );
          })
        : null}
    </div>
  );
}

export default App;
