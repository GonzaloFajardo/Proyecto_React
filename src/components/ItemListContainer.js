import React, {useEffect, useState} from 'react'
import ItemCount from "./ItemCount";
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

/*
const InicialProductos = [{name:'lucas', id: 1},{name:'orlans' , id: 2}, {name:'pepe', id: 3}];
*/
/*
const queryproductos = new Promise((resolve, rejected)=>{
  setTimeout(() => {
    resolve(InicialProductos)
  }, 3000);
  
  //rejected('hay un error')
})
*/
 const ItemListContainer = ({prop}, {onAdd}) => {
  
  const [products, setProducto] = useState([]);
  const [error, setError] = useState(false);
  const { id } = useParams();

  //const URL = `https://fakestoreapi.com/products/category/${id}`;
  const ruta = id ? `https://fakestoreapi.com/products/category/${id}` : `https://fakestoreapi.com/products`
 
  // con un ternario elige para ver todos o solo uno 
  // si esta llegando undifine se elige el fetch de todo sino el dinamico
  // 'https://fakestoreapi.com/products/category/${name}'
  // https://fakestoreapi.com/products


useEffect(()=>{
  // queryproductos.then((data)=>{
  //   setProducto(data);
  // }) .catch((err)=>{
  //   console.error('todo mal')
  //   console.error(err)
  // })

  // fetch('https://fakestoreapi.com/products')
  //           .then(res=>res.json())
  //           .then(json=>console.log(json))
  //           .catch((e)=>{console.log(e);})

          const getProductos = async ()=>{
            try{
              

              const res = await fetch(ruta)
              const data = await res.json()
              setTimeout(() => {
                setProducto(data);
              }, 2000);

            } catch {
              
                setError(true);
                
            }
            

          }
          getProductos();
},[id]);


  const onAdd2 = () => {
    onAdd();
    
  };

    return (
      <>
      <h1>{prop}</h1> 
      <ItemCount onAdd={onAdd2}> 
      
      </ItemCount>
      {!error ? <>
      {products.length ? (
        <ItemList products={products} />
        ) : (
        <h1>Cargando....</h1>
      )}  </>
      :
      <h1>Hubo un error</h1>
    }
      


      
      </>
  )
}




export default ItemListContainer