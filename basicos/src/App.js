import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';


function App() {

  const [productos, setProductos] = useState([
    {id: 1, nombre: "Camisa ReactJS", precio: 50},
    {id: 2, nombre: "Camisa VueJS", precio: 40},
    {id: 3, nombre: "Camisa Node.js", precio: 30},
    {id: 4, nombre: "Camisa Angular", precio: 20},
  ]);

  const [carrito, setCarrito] = useState([]);
 
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header
        titulo = "Tienda Virtual"
      />

      <h1>Lista de productos</h1>

      {productos.map(producto =>(
          <Producto
            key = {producto.id}
            producto = {producto}
            carrito = {carrito}
            productos = {productos}
            setCarrito = {setCarrito}
          />  
      ))}

      <Carrito 
        carrito = {carrito}
        setCarrito = {setCarrito}
      />

      <Footer
        fecha={fecha}
      />
    </Fragment>
  );
}

export default App;
