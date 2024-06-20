import React, { createContext, useState } from "react";
import "./App.css";
import data from "./Data";

import Left from "./Left";
import Right from "./Right";

export const cartContext = createContext();

function App() {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  return (
    <>
      <cartContext.Provider
        value={{ products, setProducts, cart, setCart, total, setTotal }}
      >
        <div id="container">
          <Left />
          <Right />
        </div>
      </cartContext.Provider>
    </>
  );
}

export default App;
