import React, {createContext, useState, useEffect } from 'react'

export const CustomContext = createContext();


const CustomProvider = ({children}) => {
  // console.log(CustomContext); //{Provider} solo usaremos el provider y el usecontext {Consumer}
  const [cart, setCart] = useState([])
  const [totals, setTotals] = useState({ quantity: 0, total: 0 });

  useEffect(() => {
    let qtyInitial = 0;
    let total = 0;
    cart.forEach((product) => {
      qtyInitial += product.quantity;
      total += product.quantity * product.price;
    });
    setTotals({ qty: qtyInitial, total: total });
  }, [cart]);


  const addProducto = (product, quantity) => {
    if(isInCart(product.id)){
      setCart(
        cart.map((productCart) => {
          if (productCart.id === product.id)
            return { ...productCart, quantity };
          return productCart;
        })
      );
    }else{
      setCart([...cart, {...product, quantity}]);
    }
    
    
  }

  const removeProduct = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  }

  const isInCart = (id) =>{return cart.some((product) => product.id === id)};

  const clear = ()=>{
    setCart([]);
  }

  return (
    
    <CustomContext.Provider value={{cart, totals, addProducto, removeProduct, isInCart, clear}}>{children}</CustomContext.Provider>
  )
}

export default CustomProvider