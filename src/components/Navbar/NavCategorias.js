import React from 'react'

export const NavCategorias = () => {
  
    const categorias = [{id:0, name:"categoria 1"},
    {id:1, name:"categoria 2"},
    {id:2, name:"categoria 3"}]

    return (
        <nav >
        <ul style={style.contenedor}>
        {
        categorias.map((category)=>{
          return <a key={categorias.id} href='alt' style={style.links}> {category.name} </a>
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