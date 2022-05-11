import './itemCount.css';

import{ useState, useEffect } from 'react';

export const ItemCount = ({initial, stock, onAdd}) => {

    const [count, settCount] = useState(initial);

        const decrease = () => {
        settCount (count -1)
        }

        const increase = ()=>{
         settCount (count +1)
        }

    return(
        <div className='counter'>
            <button disabled ={count <= 1}onClick={decrease}>-</button>
            <span>{count}</span>
            <button disabled ={count >= stock}onClick={increase}>+</button>
            

            <div>
                <button disables ={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    );
}
export default ItemCount;