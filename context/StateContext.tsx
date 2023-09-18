"use client";

import { showToast } from "@/components/Global/Toast";
import {
  CartProductType,
  OfferDetailsType,
  foundProductType,
} from "@/types/GlobalTypes";
import { createContext, useContext, useEffect, useState } from "react";
const StateContext = createContext<any>(null);

export const StateProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<any[]>([]); // [array of cart items]
  const [totalPrice, setTotalPrice] = useState<number>(0); // [sum of all product price]
  const [grandTotal, setGrandTotal] = useState<number>(0); // [totalPrice + shippingCharge - discount
  const [totalQuantity, setTotalQuantity] = useState<number>(0);
  const [checkoutAuthType, setCheckoutAuthType] = useState<string>("register"); // [register, login] for checkout login form

  const [cartOpen, setCartOpen] = useState<boolean>(false); // [true, false] for menu drawer for mobile
  const [qty, setQty] = useState<number>(1);
  const [shippingCharge, setShippingCharge] = useState<number>(40);

  const [offer, setOffer] = useState<OfferDetailsType>(null);

  let foundProduct: foundProductType;
  let index: number;

  useEffect(() => {
    const localCartItems = localStorage.getItem("cartItems");
    const localTotalPrice = localStorage.getItem("totalPrice");
    const localTotalQuantity = localStorage.getItem("totalQuantity");
    const localOffer = localStorage.getItem("offer");

    setCartItems(localCartItems ? JSON.parse(localCartItems) : []);
    setTotalPrice(localTotalPrice ? JSON.parse(localTotalPrice) : 0);
    setTotalQuantity(localTotalQuantity ? JSON.parse(localTotalQuantity) : 0);
    setOffer(localOffer ? JSON.parse(localOffer) : null);
  }, []);

  useEffect(() => {
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
  }, [cartItems, totalQuantity, totalPrice]);

  useEffect(() => {
    // save offer in localstorage
    localStorage.setItem("offer", JSON.stringify(offer));
  }, [offer]);

  const clearCart = () => {
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantity(0);
    setGrandTotal(0);
    setShippingCharge(40);
    setOffer(null);
  };

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
        checkoutAuthType,
        shippingCharge,
        grandTotal,
        setGrandTotal,
        setShippingCharge,
        setCheckoutAuthType,
        setOffer,
        setCartOpen,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuantity,
        clearCart,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
