import { addDoc, getFirestore } from "firebase/firestore";
import React from "react";
import { Link } from 'react-router-dom'
import { useCartContext } from "../../CartContext";
import ItemCart from "../ItemCart";


const Cart = () => {
    const { cart, totalPrice } = useCartContext();


    const order = {
        buyer: {
            name: "Santiago",
            email: "santiago@gmail.com",
            phone: "261261261",
            address: "asdf"
        },
        items: cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
        total: totalPrice(),
    }

const handleClick = () =>{

const db = getFirestore();
const ordersCollection = collection (db, 'orders');
addDoc(ordersCollection, order)  
.then(({ id }) => console.log(id))

}

    if (cart.length === 0) {
        return (
            <>
            <p>No hay elementos en el carrito</p>
            <Link to='/Reservas'>Hacer compras</Link>
            </>
        );
    }

    return (
        <>
        {
            cart.map(product => <ItemCart key={product.id} product={product} />)
        }
        <p>
            Total: {totalPrice()}
        </p>
        <button onClick={handleClick}> Generar reserva</button>
        </>
    )
}

export default Cart;