// import React from "react";
import './App.css';
import ItemDetailContaner from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer" ;
import Navbar from "./components/Navbar";


function App(){
    return(
        <div className="App">
        
        <Navbar />
        <ItemDetailContaner />
        
        </div>
    );
}
export default App;