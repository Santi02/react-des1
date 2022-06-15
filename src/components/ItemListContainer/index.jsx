import React, {useState, useEffect} from 'react' ;
import ItemList from '../ItemList';
import Title from '../Title';
// import { getFirestore, getDoc, getDocs, setItems, collection, doc} from "firebase/firestore";

const films = [
    { id: 1, price: 10000, image: "https://www.cataloniahotels.com/es/blog/wp-content/uploads/2016/05/habitaci%C3%B3n-individual-catalonia-620x412.jpg" , title: "Single" },
    { id: 2, price: 12500,  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_Nmd2rB6XJzE-5YLoas9TYBYEYj3E9CzwA&usqp=CAU", title: "Doble" },
    { id: 3, price: 19750, image:"https://i.pinimg.com/originals/08/a7/dd/08a7dd8746cac9afed89b25265871dc2.jpg", title: "Suite" },
];

export const ItemListContainer = ({texto}) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise( resolve  =>{
            setTimeout (() => {
                resolve(films);
            },2000);
        });
        getData.then(res => setData(res));

    }, [])

    // useEffect(() => {
    //     const db = getFirestore()

    //     const reservaRef = doc(db, "reservas", "XtcTzT0MIQV2YYqtMcto")
    //     getDoc(reservaRef).then(snapshot =>{
    //         if(snapshot.exists()){
    //             console.log(snapshot.id)
    //             console.log(snapshot.data())
    //             console.log({id: snapshot.id, ...snapshot.data()})
    //         }
    //     })

        // const reservasRef = collection(db, "reservas")
        // getDocs(reservasRef).then(snapshots => {
        //     setItems(snapshots.docs.map(doc => ({id: doc.id, ...doc.data()})))
        // })
    // },[])

//         const reservasRef = collection(db,"reservas")
//         getDocs(reservasRef).then(snapshots => {
//             if (snapshots.size === 0){
//                 console.log ("No hay products");
//             }
//             SVGMetadataElement(snapshots.docs.map(doc => ({id: doc.id, ...doc.data()})));
//         });
    
// },[]);

    
    return (
        <>
        <Title greeting={texto} />
        
        <ItemList data={data} />
        </>
    );
}

export default ItemListContainer;
