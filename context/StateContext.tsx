"use client";

import { createContext, useContext, useState } from "react";
const StateContext = createContext({});

export const StateProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItem, setCartItem] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);
  const [qty, setQty] = useState(1);

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };
  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  return (
    <StateContext.Provider
      value={{
        cartItem,
        totalPrice,
        totalQuantity,
        cartOpen,
        qty,
        incQty,
        decQty,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
