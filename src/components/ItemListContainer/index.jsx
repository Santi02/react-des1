import React, {useState, useEffect} from 'react' ;
import { getFirestore, getDocs, collection} from "firebase/firestore";
import ItemList from '../ItemList';
import Title from '../Title';
import { useParams } from 'react-router-dom';
import "./ItemListContainer.css";

// const films = [
//     { id: 1, price: 10000, image: "https://www.cataloniahotels.com/es/blog/wp-content/uploads/2016/05/habitaci%C3%B3n-individual-catalonia-620x412.jpg" , title: "Single" },
//     { id: 2, price: 12500,  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_Nmd2rB6XJzE-5YLoas9TYBYEYj3E9CzwA&usqp=CAU", title: "Doble" },
//     { id: 3, price: 19750, image:"https://i.pinimg.com/originals/08/a7/dd/08a7dd8746cac9afed89b25265871dc2.jpg", title: "Suite" },
// ];

export const ItemListContainer = ({ texto }) => {
    
    const [data, setData] = useState([]);
    const { categoriaId } = useParams();
    

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, "reservas");
        getDocs(queryCollection)
        .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        
    },[categoriaId]);
    
    return (
        <>
    <div className='text'>
        <Title greeting={texto} />
    </div>

        <div className='producto'>
        <ItemList data={data} />
        </div>
        </>
    );
}

export default ItemListContainer;