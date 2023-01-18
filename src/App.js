import './App.css';
import React from 'react';
import Navbar from './components/Navbar/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import CartProvider from './components/CartProvider/CartProvider';
import Footer from './components/Footer/Footer';
//export const CartContext = React.createContext('');



function App() {
  return (
    <>
      <BrowserRouter>        
        <CartProvider> 
          <Navbar/>  
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/home" element={<ItemListContainer/>} />
            <Route path="/categoria/:categoriaId" element={<ItemListContainer/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/detalle/:detalleId" element={<ItemDetailContainer/>} />
          </Routes>
          <Footer/>
        </CartProvider>
      </BrowserRouter>      
    </>
      
  );
}

export default App;
