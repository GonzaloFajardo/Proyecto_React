import React, { useState } from 'react'


 const ItemCount = ({agregarCarrito, stock}) => {
   
    const [count, setCount] = useState(0);
    

    const handleIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
    };
    }

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
          }
    };
  
    

    return (
        <>
    <div>
    <button onClick={handleDecrement} disabled={count === 0}>
        -
      </button>
      <span>{count}</span>
      <button onClick={handleIncrement} disabled={count === stock}>
        +
      </button>
      <button onClick={() => agregarCarrito(count)} disabled={count === 0}>
        Agregar al carrito
      </button>

      
    </div>
  </>
  )
}

export default ItemCount;