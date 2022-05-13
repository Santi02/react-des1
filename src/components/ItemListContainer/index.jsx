import React, {useState, useEffect} from 'react' ;
import ItemList from '../ItemList';
import Title from '../Title';
import ItemCount from '../ItemCount';

const films = [
    {id: 1, image: "https://www.kayak.com.ar/rimg/himg/8a/7c/3b/ice-37894-68605636_3XL-663425.jpg?width=720&height=576&crop=true",title: "habitacion"},
    {id: 2, image: "https://exp.cdn-hotels.com/hotels/2000000/1600000/1593400/1593312/7bf88a7a_z.jpg?impolicy=fcrop&w=500&h=333&q=medium", title: "exterior"},
    {id: 3, image: "https://media-cdn.tripadvisor.com/media/photo-s/09/a5/01/57/entrance--v8426007.jpg", title: "entrada"},
];


export const ItemListContainer = ({texto}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(films);
            }, 3000);
        });
        getData.then(res => setData(res));

    },[])
   
    const onAdd = (quantity)=>{
        console.log (`compraste ${quantity} unidades`)
    }
    return(
        <>
        <Title greeting={texto} />
        <ItemCount initial ={1} stock={5} onAdd={onAdd} />
        <ItemList data={data}/>
        </>
    );
}
export default ItemListContainer;