import React, {useState} from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";
import './itemDetail.css'


export const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false);

    const onAdd = (quantity) => {
    
        setGoToCart(true);
    }


    return(
        <div className="container">
            <div className="detail">
                <img className="detail__iage" src={data.image} alt="" />
                <div className="content">
                    <h2>{data.title}</h2>   
                {
                    goToCart
                    
                    ? <Link to='/cart'> Concluir reserva</Link>
                    : <ItemCount initial={1} stock={5} onAdd= {onAdd} />
                }
                </div>
            </div>
        </div>
    );
}
export default ItemDetail;