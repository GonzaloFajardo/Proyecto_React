import React, {useState, useEffect}  from 'react'


const ComponentesDeEstado = () => {

  const [show, setShow] = useState(true);

  /* clase de estados 1  */
    const [count, setCount] = useState(0);
    // const [state, setState] = useState('');
    // const [users, setUsers] = useState([]);

    console.log('contructor')
    
    useEffect(()=>{
      console.log('montaje y actualizacion')

       //set time out
       setTimeout(() => {
        console.log('mensaje en el time out')
      }, 2000);

      // set interbal cada cierto tiempo en este caso 1 s se ejecuta

      // const interval = setInterval(() => {
      //   console.log('ping')
      // }, 1000);

      // // el desmonte del componente se hace a traves de un return
      // return (()=>{
      //   clearInterval(interval);
      // })


    },[count]);

     

    // let numero = 0;

    const handlerClick = ()=>{
        setCount(count + 1);
        console.log('click')
    }

  return (
    <>
    {show ? <h1>Algo</h1> : <h1>Nada</h1>}
    <button onClick={()=>{
      {setShow(!show)}
    }}>Alternar</button>

    {/* clase de estados 1 */}
    {console.log('render')}
    <h1>{count}</h1>
    <button onClick={handlerClick}>click me</button> 
    
    </>
  );
};

export default ComponentesDeEstado;