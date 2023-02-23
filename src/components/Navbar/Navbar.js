import React from 'react'
import './Navbar.css'
import tienda from "../../assets/tienda.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import createTypography from '@mui/material/styles/createTypography';
import NavCategorias from './NavCategorias';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({}) => {

  

  return (
    
    <header style={style.contenedor}>
      <Link to="/" >
        <img src={tienda} alt="icono tienda" style={style.imagen}></img>
        </Link>
        <h1>Ecommerce</h1>
        <NavCategorias></NavCategorias>

        <Link to={"/cart"}>
        <CartWidget></CartWidget>
        </Link>
    </header>
    
  )
}



export const style = {
  contenedor:{
  display: "flex",
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#333',
  color: '#fff',
  width: '100%',
  },
  
  
  imagen:{
    width: 100, 
    height: 100, 
    resizeMode: 'contain',
    marginLeft: "2em"
    }
  };

export default Navbar

