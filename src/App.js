import React, {useState} from "react";
import Navbar from "./components/Navbar/Navbar.js"
import ItemListContainer from "./components/ItemListContainer.js";
import ComponentesDeEstado from "./ComponentesDeEstado.js"
import Users from "./Users.js"
import ItemCount from "./components/ItemCount.js";
import ItemDetailContainer from "./components/ItemDetailContainer.js";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Cart from "./components/Cart.js";
import ComponenteEventos from "./components/ComponenteEventos.js"
import UsersList from "./components/UsersList.js"
import CustomProvider from "./context/CustomContext.js";
import ComponenteMemo from "./components/ComponenteMemo.jsx";
import BotonAumentar from "./components/BotonAumentar.jsx";

const App = () => {
  const greeting = "Las mejores ofertas"
  const onAdd = () => {
    
    
  };

  return (
    <>

<BrowserRouter>
<CustomProvider>
<Navbar>
  
</Navbar>

<Routes>

<Route path="/" element={<ItemListContainer prop={greeting} onAdd={onAdd} />} />

<Route path="/cart" element={<Cart isRed={true} estilo={'verde'}></Cart>} />

<Route path={"/category/:id"} element={<ItemListContainer prop={greeting} onAdd={onAdd} />}></Route>

<Route path={"/product/:id"} element={<ItemDetailContainer>
  </ItemDetailContainer>}></Route>



</Routes>
</CustomProvider>
</BrowserRouter>
    
    
</>
    
  );
}

export default App;


/*

*/


/*
<UsersList>

    </UsersList>
*/


/*
<ItemListContainer prop={greeting} onAdd={onAdd}>

    </ItemListContainer >

    <ComponentesDeEstado>

    </ComponentesDeEstado>

    <Users>

    </Users>

    <ItemCount onAdd={onAdd}>

    </ItemCount>

    <ItemDetailContainer>
      
    </ItemDetailContainer>
    */
