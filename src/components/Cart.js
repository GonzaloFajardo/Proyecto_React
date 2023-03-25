import React, { useContext, useState } from "react";
import { CustomContext } from "../context/CustomContext";
import { Link } from "react-router-dom";
import "./Cart.css";
import { collection, addDoc, serverTimestamp, doc, updateDoc, where, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const Cart = ({ isRed, estilo }) => {
  const { cart, totals, removeProduct } = useContext(CustomContext);
  const [sellId, setSellId] = useState("");
  const buyer = {
    name: "Juan",
    apellido: "Perez",
    email: "juanperez@gmail.com",
  };

  

  
  const handlerClickSell = () => {
    const sellCollection = collection(db, "sells");
    addDoc(
      sellCollection,
      {
        buyer,
        items: cart,
        total: totals.total,
        time: serverTimestamp(),
      }
    )
    .then((resultado) => {
      const resultadoID = resultado.id;
      setSellId(resultadoID);
    })
    console.log(sellId)
    // cambiarlo para que se muestre al usuario
  };

  

/*
  const handlerStock = (cart) => {
    cart.forEach(function(product) {
      // obtenemos la referencia al documento del producto por su ID
      const docReference = doc(db, 'products', product.id);
      console.log(product)
      // actualizamos el campo 'stock' del documento
      updateDoc(docReference, {stock:50})
    });
  };
*/

const handlerStock = () => {
  const docReference = doc(db, 'products', 'GTJBNpt3BwoWxhCL2ncc', 'OOQyUF4D2gven9ZSY6Zc');
  updateDoc(docReference, {stock:40})
};

  return (
    <>
      {!cart.length ? (
        <>
          <h1 className={isRed ? "rojo" : "azul"}>
            No hay productos agregados, puedes verlos <Link to={"/"}>aca</Link>
          </h1>
          <h2 className={`tamanio ${estilo || ""}`}>Gracias por tu visita</h2>
        </>
      ) : (
        <>
          <div>
            {cart.map((product) => {
              return (
                <div key={product.id}>
                  <h1>{product.title}</h1>
                  <h2>Precio: S/. {product.price}</h2>
                  <h2>Cantidad: {product.quantity}</h2>
                  <button onClick={() => removeProduct(product.id)}>eliminar</button>
                </div>
              );
            })}
          </div>
          <h1>Total : S/. {totals.total}</h1>
          <button onClick={handlerClickSell}>Comprar</button>
        </>
      )}
    </>
  );
};

export default Cart;

/*  if (!cart.length) {
    return (
      <h1>
        No hay peoductos agregados, puedes verlos <Link to={"/"}>aca</Link>
      </h1>
    );
  }
  return (
    <div>
      {cart.map((product) => {
        return <h1 key={product.id}>{product.title}</h1>;
      })}
    </div>
  );*/