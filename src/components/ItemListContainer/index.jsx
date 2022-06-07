import React, {useState, useEffect} from 'react' ;
import ItemList from '../ItemList';
import Title from '../Title';

const films = [
    { id:1 , image: "https://www.cataloniahotels.com/es/blog/wp-content/uploads/2016/05/habitaci%C3%B3n-individual-catalonia-620x412.jpg" , title: "Single" },
    { id:2 , image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_Nmd2rB6XJzE-5YLoas9TYBYEYj3E9CzwA&usqp=CAU", title: "Doble" },
    { id:3 , image:"https://i.pinimg.com/originals/08/a7/dd/08a7dd8746cac9afed89b25265871dc2.jpg", title: "Suite" },
];


export const ItemListContainer = ({texto}) => {
    
    
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise( resolve  =>{
            setTimeout (() => {
                resolve(films);
            },3000);
        });
        getData.then(res => setData(res));

    }, [])

    
    return (
        <>
        <Title greeting={texto} />
        
        <ItemList data={data} />
        </>
    );
}

export default ItemListContainer;
