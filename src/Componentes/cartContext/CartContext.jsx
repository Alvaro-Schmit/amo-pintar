import React, { createContext, useContext, useState } from "react";

export const cartContext = createContext([]);
export const useCartContext = ()=>useContext(cartContext)

export default function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);

 
  console.log(cartList);
 const addToCart = (data, quantity)=>{

    const index= cartList.findIndex(i=> i.data.id=data.id)
    if (index>-1){
      const addValue= cartList[index].quantity

      cartList.splice(index, 1)
      setCartList([...cartList, {data, quantity: quantity = addValue}])

     }
     else{setCartList([...cartList,{data, quantity}])
    }

 }
  
  
  
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
