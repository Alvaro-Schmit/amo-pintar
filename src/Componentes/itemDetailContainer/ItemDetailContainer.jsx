import {useState, useEffect} from 'react';
import ItemDetail from '../itemDetail/ItemDetail';
import "./itemDetailContainer.css"
import dataItems from '../../dataItems/DataItems'
import Loader from '../loader/Loader'
import { useParams } from 'react-router';

const filterDataItem = dataItems.filter(filt => filt.name === 'Floki')

const getItem = new Promise((resolve, reject)=>{
    const status = 200
    if(status===200){
        setTimeout(() => {
            resolve(filterDataItem)
        }, 2000);
    }else{
          reject(console.log("Algo salio mal al cargar los datos"))
    }
})

function ItemDetailContainer () {
    
    const [data, setData] = useState([])
    const [loading, setloading] = useState(true)
    const {nameId}= useParams()

    useEffect(() => {
        if (nameId === undefined) {
      
        getItem
        .then(resp => setData(resp)
        )
        .catch(err => console.log(err))
        .finally(()=>setloading(false))
        }
        else{
            getItem
            .then(resp => setData(resp.filter(it=> it.name===nameId)))
            .catch(err => console.log(err))
            
        }
   },[nameId] )



    
    return(
  
        <div >
            {loading ? 
                    <div className='loaderContainer'>
                        <Loader/>
                    </div>
                :
                <div>
                 <ItemDetail  data={data} />
            
            </div>
            }
        </div>
    
    );
  };

  
  export default ItemDetailContainer;


