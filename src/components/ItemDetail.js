import React, { useState, useContext } from 'react'
import ItemCount from "./ItemCount";
import {Link} from 'react-router-dom'
import { CustomContext } from '../context/CustomContext';

const viewport= {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  }

const ItemDetail = ({product}) => {
  const [count, setCount] = useState(0);
  const [finalizar, setFinalizar] = useState(false);
  const stock = 5;
  const { addProducto } = useContext(CustomContext);
  

  const agregarCarrito = (cant) => {
    
    setCount(cant);
    setFinalizar(true);
    
    addProducto(product, cant);
  };

  return (
    <div style={style.container}>
    <h3> {product.title} </h3>
    <h4> {product.category} </h4>
    <h5> {product.description} </h5>
    <p> S/.{product.price} </p>
    <img src={product.image} alt={product.title} style={{width:'70%'}} ></img>
    
    <div>
    {finalizar ? (
      
      <Link to={`/Cart`}>
          <button> Finalizar compra </button>
          </Link>
          
      
    ) : (
      <ItemCount agregarCarrito={agregarCarrito} stock={stock}></ItemCount>
    )}
    </div>

    
</div>
  )
}

export default ItemDetail;

const style = {
    container: {
        width: viewport.width > 900 ? '30%' : '90%'
    }
}