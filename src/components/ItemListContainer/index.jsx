import React, {useState, useEffect} from 'react' ;
import ItemList from '../ItemList';
import Title from '../Title';
import ItemCount from '../ItemCount';



export const ItemListContainer = ({texto}) => {
    
    
    const [data, setData] = useState([]);

    const onAdd = (quantity) => {
        console.log (`Reservaste ${quantity} habitacion/es`)  ;
    }
    return (
        <>
        <Title greeting={texto} />
        <ItemCount initial={1} stock={5} onAdd= {onAdd} />
        <ItemList data={data} />
        </>
    );
}

export default ItemListContainer; 