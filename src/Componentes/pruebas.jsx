
import data from './dataItems/DataItems'
import {useState, useEffect} from 'react';

const getFech = new Promise((resolve, reject)=>{
const valor=200
    if(valor ===200){
        resolve(data)
    }
   else{ reject("no funca");}
    
})

function Pruebas() {

const [items, setData] = useState([])
   
getFech
.then(respuesta=> {
    setData(respuesta)})

    useEffect(() => {
        getFech
        .then((resp)=> console.log(resp) )     //guardar en el estado
    }, [])

    return (
        
        <div>
            {items.map(item =><h1>{item.name}</h1>)}
            
        </div>
    )
}

export default Pruebas
