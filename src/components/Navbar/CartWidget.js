import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CustomContext } from "../../context/CustomContext";

 const CartWidget = () => {
  
    const { totals } = useContext(CustomContext);

    return (
        <div style={style.container}>
        <ShoppingCartIcon fontSize='large' color='success' href='alt'  alt="icono carrito" style={style.icon}></ShoppingCartIcon> {totals.qty > 0 && <span style={style.notificacion}>{totals.qty}</span>}
        
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