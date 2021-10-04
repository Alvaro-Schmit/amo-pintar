import React, { createContext, useContext, useState } from "react";

export const cartContext = createContext([]);
export const useCartContext = ()=>useContext(cartContext)

export default function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  // function addToCart(data) {
  //      setCartList([...cartList, data]);
  // }

  const addToCart = (data, quantity)=>{

    const index= cartList.findIndex(i=> i.data.id===data.id)
    if (index >-1){
      const addValue= cartList[index].quantity

      cartList.splice(index, 1)
      setCartList([...cartList, {data, quantity: quantity += addValue}])

     }
     else{setCartList([...cartList, {data, quantity}])
    }

 
    
 }


 const deleteFromCart =(data)=>{
   const deleteProduct = cartList.filter((prod)=> prod.data.id !== data.data.id);
    setCartList([...deleteProduct])
  }

  const iconCart =()=> {
  
    return cartList.reduce((acum, valor)=>acum + valor.quantity, 0)
  }

  const totalPrice = () => {
    return cartList.reduce((acum, valor) => (acum+(valor.quantity * valor.data.price )), 0)
  }
 
  console.log(cartList);
  
  
     function clearList() {
      cartList([]);
  }

  return (
    <cartContext.Provider
      value={{
        cartList,
        addToCart,
        deleteFromCart,
        totalPrice,
        clearList,
        iconCart
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
