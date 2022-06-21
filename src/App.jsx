import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from "./components/ItemDetailContainer";
import Navbar from "./components/Navbar";
import Home from './views/Home/Home';
import ItemListContainer from './components/ItemListContainer';
import Cart from "./components/Cart";
import CartProvider from './CartContext';


// export const CartContext = React.createContext ('');
// console.log('CartContext: ', CartContext);



function App(){
    return(
    
        <>
        <BrowserRouter>
        {/* <CartContext.Provider value='Santiago'> */}
        <CartProvider>
        <Navbar />
        <Routes>
            <Route exact path= '/' element = {<Home />} /> 
            <Route exact path= '/Home' element = {<Home />} />
            <Route exact path= '/Reservas' element = {<ItemListContainer />} />
            <Route exact path= '/Cart' element = {<Cart />} />
            <Route exact path= '/detalle/:detalleId' element = {<ItemDetailContainer />} />
        </Routes>
        </CartProvider>
        {/* </CartContext.Provider> */}
        </BrowserRouter>
        </>

    );
}
export default App;