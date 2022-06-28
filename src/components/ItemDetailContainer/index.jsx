import React, {useState, useEffect} from 'react' ;
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail';
import { getFirestore, getDoc, doc} from "firebase/firestore";


// const films = [
//     { id: 1 , price: 10000, image: "https://www.cataloniahotels.com/es/blog/wp-content/uploads/2016/05/habitaci%C3%B3n-individual-catalonia-620x412.jpg" , title: "Single" },
//     { id: 2 , price: 12500, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_Nmd2rB6XJzE-5YLoas9TYBYEYj3E9CzwA&usqp=CAU", title: "Doble" },
//     { id: 3 , price: 19750, image:"https://i.pinimg.com/originals/08/a7/dd/08a7dd8746cac9afed89b25265871dc2.jpg", title: "Suite" },
// ];

export const ItemDetailContainer = () => {
    
    const [data, setData] = useState({});
    const {detalleId} = useParams();
    
    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc= doc(querydb, "reservas", detalleId);
        getDoc(queryDoc)
        .then(res => setData({id: res.id, ...res.data() }))
    },[])

    
    return (
        <ItemDetail data={data} />
    );
}

 export default ItemDetailContainer;

// export const ItemDetailContainer = () => {
    
    
//     const [data, setData] = useState({});
//     const {detalleId} = useParams ();

//     useEffect(() => {
//         const getData = new Promise( resolve  =>{
//             setTimeout (() => {
//                 resolve(films);
//             },2000);
//         });
//         getData.then(res => setData(res.find(film=>film.id === parseInt(detalleId))));

//     }, [])


//         return (
//             <ItemDetail data={data} />
//         );
//     }
    
// export default ItemDetailContainer;

