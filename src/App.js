import React from "react";
import Navbar from "./components/Navbar/Navbar.js"
import ItemListContainer from "./components/ItemListContainer.js";


const App = () => {
  const greeting = "Las mejores ofertas"
  return (
    <React.Fragment>

    <Navbar>
      
    </Navbar>
    
    <ItemListContainer prop={greeting}>

    </ItemListContainer>

    </React.Fragment>
  );
}

export default App;


