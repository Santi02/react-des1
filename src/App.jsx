// import React from "react";
import ItemListContainer from "./components/ItemListContainer" ;
import Navbar from "./components/Navbar";


function App(){
    return(
        <div className="App">
        
        <Navbar />
        <ItemListContainer texto='Santiago' />
        
        </div>
    );
}
export default App;