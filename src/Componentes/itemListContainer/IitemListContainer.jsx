import {useState, useEffect} from 'react';
import ItemList from '../itemList/ItemList';
import "./itemListContainer.css"
import dataItems from '../dataItems/DataItems'


const promise = new Promise((resolve, reject)=>{
    const status = 200
    if(status===200){
        setTimeout(() => {
            resolve(dataItems)
        }, 2000);
    }else{
          reject(console.log("Algo salio mal al cargar los datos"))
    }
})

function ItemListContainer () {
    
    const [data, setData] = useState([])
    const [loading, setloading] = useState(true)


    useEffect(() => {
      promise
        .then(resp => setData(resp)
        )
        .catch(err => console.log(err))
        .finally(()=>setloading(false))
        
   }, )



    
    return(
  
        <div >
            {loading ? 
                    <h2>Cargando Productos...</h2>
                :
            <ItemList  data={data}  greting="Bien Venido"/>
            }
        </div>
    
    );
  };
  
  export default ItemListContainer;


