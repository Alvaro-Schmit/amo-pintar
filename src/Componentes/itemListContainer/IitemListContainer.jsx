import {useState, useEffect} from 'react';
import ItemList from '../itemList/ItemList';
import "./itemListContainer.css"
import dataItems from '../../dataItems/DataItems'
import Loader from '../loader/Loader'
import { useParams } from 'react-router';

const promise = new Promise((resolve, reject)=>{
    const status = 200
    if(status===200){
        setTimeout(() => {
            // console.log(dataItems)...aca llega el array emisproductos
            resolve(dataItems)
        }, 2000);
    }else{
          reject(console.log("Algo salio mal al cargar los datos"))
    }
})

function ItemListContainer () {
    
    const [data, setData] = useState([])
    const [loading, setloading] = useState(true)
    const {categoryId}= useParams()


    useEffect(() => {
        // console.log(categoryId); aca llega la categoria seleccionada Naturaleza o Personas si hago 
        // click en todo dice undefine
        if (categoryId === undefined) {
     
        promise
        .then(resp => setData(resp))
        .catch(err => console.log(err))
        .finally(()=>setloading(false))
        }
        else{
            promise
            .then(resp => setData(resp.filter(it=> it.category===categoryId)))
            .catch(err => console.log(err))
            .finally(()=>setloading(false))
        }

        
   }, [categoryId])



    
    return(
  
        <div >
            {loading ? 
                    <div className='loaderContainer'>
                        <Loader/>
                    </div>
                :
            <ItemList  data={data}  greting="Bien Venido"/>
            
            }
        </div>
    
    );
  };
  
  export default ItemListContainer;


