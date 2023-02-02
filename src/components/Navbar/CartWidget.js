import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const CartWidget = () => {
  
   

    return (
        <div style={style.container}>
        <ShoppingCartIcon fontSize='large' color='success' href='alt'  alt="icono carrito" style={style.icon}></ShoppingCartIcon> <span style={style.notificacion}>4</span>
        </div>
  )
}

const style = {
    
    

    icon:{
    
    color: "red", 
    fontSize: "1.5em"
    },
    notificacion:{
        color: "red", 
        fontSize: "1em",
        marginRight: "2em"
    }
    };


export default CartWidget