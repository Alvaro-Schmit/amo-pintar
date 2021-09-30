import React, { createContext, useContext, useState } from "react";

export const cartContext = createContext([]);
export const useCartContext = ()=>useContext(cartContext)

export default function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  function addToCart(data) {
       setCartList([...cartList, data]);
  }
  
  console.log(addToCart);
  
  function clearList() {
      cartList([]);
  }


  return (
    <cartContext.Provider
      value={{
        cartList,
        addToCart,
        clearList
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
