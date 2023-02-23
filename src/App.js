import React from "react";
import Navbar from "./components/Navbar/Navbar.js"
import ItemListContainer from "./components/ItemListContainer.js";
import ComponentesDeEstado from "./ComponentesDeEstado.js"
import Users from "./Users.js"
import ItemCount from "./components/ItemCount.js";
import ItemDetailContainer from "./components/ItemDetailContainer.js";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Cart from "./components/Cart.js";


const App = () => {
  const greeting = "Las mejores ofertas"
  const onAdd = () => {
    alert('Tu pedido está siendo procesado');
    
  };

  return (
    <BrowserRouter>

    <Navbar>
      
    </Navbar>
    
    <Routes>

    <Route path="/" element={<ItemListContainer prop={greeting} onAdd={onAdd} />} />

    <Route path="/cart" element={<Cart></Cart>} />
    
    <Route path={"/category/:id"} element={<ItemListContainer prop={greeting} onAdd={onAdd} />}></Route>
    <Route path={"/product/:id"} element={<ItemDetailContainer>
      </ItemDetailContainer>}></Route>
    

    
    </Routes>
    </BrowserRouter>
  );
}

export default App;

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
