import React from 'react'

const viewport= {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  }

const ItemDetail = ({product}) => {
  return (
    <div style={style.container}>
    <h3> {product.title} </h3>
    <h4> {product.category} </h4>
    <h5> {product.description} </h5>
    <p> S/.{product.price} </p>
    <img src={product.image} alt={product.title} style={{width:'70%'}} ></img>

</div>
  )
}

export default ItemDetail;

const style = {
    container: {
        width: viewport.width > 900 ? '30%' : '90%'
    }
}