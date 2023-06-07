"use client";

import { showToast } from "@/components/Global/Toast";
import { CartProductType, foundProductType } from "@/types/GlobalTypes";
import { createContext, useContext, useEffect, useState } from "react";
const StateContext = createContext<any>(null);

export const StateProvider = ({ children }: { children: React.ReactNode }) => {
  const localCartItems = localStorage.getItem("cartItems");
  const localTotalPrice = localStorage.getItem("totalPrice");
  const localTotalQuantity = localStorage.getItem("totalQuantity");

  const [cartItems, setCartItems] = useState<any>(
    localCartItems ? JSON.parse(localCartItems) : []
  );

  const [totalPrice, setTotalPrice] = useState<number>(
    localTotalPrice ? JSON.parse(localTotalPrice) : 0
  );
  const [totalQuantity, setTotalQuantity] = useState<number>(
    localTotalQuantity ? JSON.parse(localTotalQuantity) : 0
  );

  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [qty, setQty] = useState<number>(1);

  const [offer, setOffer] = useState<object>({});

  let foundProduct: foundProductType;
  let index: number;

  useEffect(() => {
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
  }, [cartItems, totalQuantity, totalPrice]);

  const toggleCartItemQuantity = (id: number, value: string) => {
    foundProduct = cartItems.find((item: any) => item.id === id);
    index = cartItems.findIndex((item: any) => item.id === id);
    if (value === "inc") {
      if (foundProduct.quantity + 1 > 10) return;
      foundProduct.quantity += 1;
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.Price);
      setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + 1);
    } else if (value === "dec") {
      setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.Price);
      setTotalQuantity((prevTotalQuantity) => prevTotalQuantity - 1);

      // quantity can't be less than 1 then remove
      if (foundProduct.quantity - 1 < 1) {
        setCartItems((prevCartItem: any) => {
          prevCartItem.splice(index, 1);
          return [...prevCartItem];
        });
        return;
      }
      foundProduct.quantity -= 1;
    }
    foundProduct.Total_Price = foundProduct.Price * foundProduct.quantity;
    setCartItems((prevCartItem: any) => {
      prevCartItem[index] = foundProduct;
      return [...prevCartItem];
    });
  };

  const onAdd = (product: CartProductType, quantity: number) => {
    const checkProductInCart = cartItems.find(
      (item: any) => item.id === product.id
    );
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.Price * quantity
    );
    setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + quantity);
    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct: any) => {
        if (cartProduct.id === product.id) {
          cartProduct = {
            ...cartProduct,
            Total_Price: cartProduct.Price * quantity,
            quantity: cartProduct.quantity + quantity,
          };
        }
        return cartProduct;
      });

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      product.Total_Price = product.Price * quantity;
      setCartItems([...cartItems, { ...product }]);
    }
    setQty(1);
    console.log(product);

    showToast(`${quantity} ${product.Name} added to bag`, "success");
  };

  const incQty = () => {
    setQty((prevQty) => {
      // max qty is 10
      if (prevQty + 1 > 10) return 10;
      return prevQty + 1;
    });
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
        cartItems,
        totalPrice,
        totalQuantity,
        cartOpen,
        qty,
        offer,
        setOffer,
        setCartOpen,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuantity,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
