
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContaner from "./components/ItemDetailContainer";
import Navbar from "./components/Navbar";
import Reservas from './views/Reservas/Reservas';
import Home from './views/Home/Home';


function App(){
    return(
        <div className="App">
        <>
        <Navbar />
        <BrowserRouter>
        <Routes>

            <Route exact path= "/Home" element = {<Home />} />
            {/* <Route exact path= "/imagenes" element = {<Imagenes />} /> */}
            <Route exact path= "/reservas" element = {<Reservas />} />
        </Routes>
        </BrowserRouter>
        <ItemDetailContaner />
        </>

        </div>
    );
}
export default App;