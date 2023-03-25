import React from 'react'

const handlerClick = (e) => {
    e.stopPropagation();
    console.log('click en button');
    //console.log(event.target);
}

const handlerChange = (e) => {
    console.log(e.target);
    console.dir(e.target);
    console.log(e.target.value);
}

const prevenirComportamiento = (e)=>{
    e.preventDefault();
    console.log('comportamiento prevenido');
  }

  const handlerClickDiv = (event) => {
    console.log('click en div');
  };
 
const ComponenteEventos = () => {
  return (
    <div onClick={handlerClickDiv}>
      <button id={'idButton'} onClick={handlerClick}>Click</button>
      <input onChange={handlerChange}/>
      <a href="https:www.google.com" onClick={prevenirComportamiento}>ir a google</a>
    </div>
  )
}

export default ComponenteEventos