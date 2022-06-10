import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from "./components/ItemDetailContainer";
import Navbar from "./components/Navbar";
// import Reservas from './views/Reservas/Reservas';
import Home from './views/Home/Home';
import ItemListContainer from './components/ItemListContainer';
import Cart from "./components/Cart";


function App(){
    return(
    
        <>
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route exact path= '/Home' element = {<Home />} />
            <Route exact path= '/Reservas' element = {<ItemListContainer />} />
            <Route exact path= '/Cart' element = {<Cart />} />
            <Route exact path= '/detalle/:detalleId' element = {<ItemDetailContainer />} />
        </Routes>
        </BrowserRouter>
        </>

    );
}
export default App;