import React from 'react'
import { useState } from 'react'
import { Button } from '@material-ui/core'
import  './itemCount.css'
import Intercambiabilidad from '../cart/Intercambiabilidad'

function ItemCount({stock, initial, onAdd}) {

const [count, setCount] = useState(initial)
const [changeButton, setChangeButton] = useState(true)


const handleCount= (value)=> {
    setCount(count + value)
    setChangeButton(false)
}

    return (
        <>
        <div className='counterContainer'>
            <div className='counter'>
                <button className="button"
                        disabled={count ===initial? true : false}
                        onClick={()=> handleCount(-1)}>-</button>
                            
           <p>{count}</p> 
            
                <button className="button"
                        disabled={count ===stock? true : false}
                        onClick={()=> handleCount(+1)}>+</button>

            </div>
            {changeButton ? <Button className="buttonAgregar" 
                        variant="contained"
                        disabled={stock === 0 ? true : false}
                        onClick={()=>onAdd(count)}>Comprar</Button>
                        :
                        <Button className="buttonAgregar" 
                        variant="contained"
                        disabled={stock === 0 ? true : false}
                        onClick={()=>onAdd(count)}>Terminar</Button> }
                <Button className="buttonAgregar" 
                        variant="contained"
                        disabled={stock === 0 ? true : false}
                        >Comprar</Button>
        </div>
        <Intercambiabilidad/>
        </>
    )
}

export default ItemCount
