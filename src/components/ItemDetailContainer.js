import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  
    const [product, setProduct] = useState({});
    const [error, setError] = useState(false);
    const { id } = useParams();
    const URL = `https://fakestoreapi.com/products/${id}`;
  
  useEffect(()=>{
  
  
            const getProductos = async ()=>{
              try{
                
  
                const res = await fetch(URL)
                const data = await res.json()
                setTimeout(() => {
                  setProduct(data);
                }, 2000);
  
              } catch {
                
                  setError(true);
                  
              }
              
  
            }
            getProductos();
  },[]);
  
    return (
        <>
        {!error ? <>
            {Object.keys(product).length ? (
              <ItemDetail product={product}/>
              ) : (
              <h1>Cargando....</h1>
            )}  </>
            :
            <h1>Hubo un error</h1>
          }
          </>
  )
}


export default ItemDetailContainer;