import React from 'react'
import { useState } from 'react'
import  './itemCount.css'

function ItemCount({stock, initial, onAdd}) {

const [count, setCount] = useState(initial)


const handleCount= (value)=> {
    setCount(count + value)
}

    return (
        <div className='counterContainer'>
            <div className='counter'>
                <button className="button"
                        disabled={count ===initial? true : false}
                        onClick={()=> handleCount(-1)}>-</button>
                            
            {count}
            
                <button className="button"
                        disabled={count ===stock? true : false}
                        onClick={()=> handleCount(+1)}>+</button>

            </div>
                <button className="buttonAgregar" 
                        disabled={stock === 0 ? true : false}
                        onClick={()=>onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
