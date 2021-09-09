
import data from './dataItems/DataItems'
import {useState, useEffect} from 'react';

const getFech = new Promise((resolve, reject)=>{
const valor=200
    if(valor ===200){
        resolve(data)
    }
   else{ reject("no funca");}
    
})

function pruebas() {

// const [data, setData] = useState([])
   
// getFech
// .then(respuesta=> {
//     setData(respuesta)})

    return (
        
        <div>
            {data.map(item =><h1>{item.name}</h1>)}
            
        </div>
    )
}

export default pruebas
