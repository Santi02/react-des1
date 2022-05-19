import React, {useState, useEffect} from "react";

import ItemDetail from "../ItemDetail";

// const film = {id: 1, image:"https://www.kayak.com.ar/rimg/himg/8a/7c/3b/ice-37894-68605636_3XL-663425.jpg?width=720&height=576&crop=true",title: "Habitacion" };

export const ItemDetailContaner = () => {
    const [data, setData] = useState({});


    return(
        <ItemDetail data={data} />
    );
}
export default ItemDetailContaner;