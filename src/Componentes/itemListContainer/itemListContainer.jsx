import React from 'react'
import ItemCount from '../itemCount/ItemCount'
import './itemListContainer.css'

const onAdd =()=> {
    alert ('Agregaste una Obra a tu carrito de compras')
}

function itemListContainer({greting}) {
    return (
        <div>
            <h1>{greting}</h1>
            <ItemCount stock={4} initial={1} onAdd={onAdd}/>
            
        </div>
    )
}

export default itemListContainer
