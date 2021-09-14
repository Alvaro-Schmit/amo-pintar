import {useState, useEffect} from 'react';
import ItemDetail from '../itemDetail/ItemDetail';
import "./itemDetailContainer.css"
import dataItems from '../dataItems/DataItems'
import Loader from '../loader/Loader'


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
    console.log(data.name);

    useEffect(() => {
      getItem
        .then(resp => setData(resp)
        )
        .catch(err => console.log(err))
        .finally(()=>setloading(false))
        
   }, )



    
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


