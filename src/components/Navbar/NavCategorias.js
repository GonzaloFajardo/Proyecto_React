import React from 'react'
import { Link, NavLink } from 'react-router-dom';

 const NavCategorias = () => {
  
    const categorias = [{id:0, name:"electronics", route:'/category/electronics'},
    {id:1, name:"jewelery ", route:"/category/jewelery"},
    {id:2, name:"men's clothing", route:"/category/men's clothing"}, 
    {id:3, name:"women's clothing", route:"/category/women's clothing"}]

   
    return (
        <nav >
        <ul  style={style.contenedor}>
        {
        categorias.map((category)=>{
          return <Link Link key={category.id} style={style.links} to={category.route}> {category.name} </Link>
        })
      }
      </ul>
    </nav>
  )
}

const style = {
    contenedor:{
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 50px',
    backgroundColor: '#333',
    color: '#fff',
    width: '100%',
    },
    links: {
        display: 'flex',
        padding: '10px 15px',
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 'bold',
        justifyContent: 'flex-start',
      },
    };


export default NavCategorias