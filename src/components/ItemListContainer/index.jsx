import React, {useState, useEffect} from 'react' ;
import ItemList from '../ItemList';
import Title from '../Title';




export const ItemListContainer = ({texto}) => {
    
    
    const [data, setData] = useState([]);

    return (
        <>
        <Title greeting={texto} />
     
        <ItemList data={data} />
        </>
    );
}

export default ItemListContainer; 