import React, { useContext } from 'react'
import { contextApp } from '../../App'




export default function Cart() {
    const {state} = useContext(contextApp)

    return (
        <div>
           
          
              
         {state.map(data=> <h1>Hola Soy {data.nombre}</h1>)}    
              
  
            
            
        </div>
    )
}
