import React, {useState} from 'react';
import ItemCount from '../ItemCount';
import './itemDetail.css';

export const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false); 
    
    const onAdd = (quantity) => {
        console.log (`compraste ${quantity} unidades`)  ;
    }


    return (
        <div className= "container">
            <div className = "detail">
                <img className= "detail_image" src= {data.image} alt ="" />
                <div className ="content">
                    <h1>{data.title}</h1>
                    {
                        goToCart
                        ? <link to='/carrito'>Terminar compra</link>
                        : <ItemCount initial={1} stock={5} onAdd= {onAdd} />
                    }
                </div>

            </div>

        </div>
    );
}

export default ItemDetail;