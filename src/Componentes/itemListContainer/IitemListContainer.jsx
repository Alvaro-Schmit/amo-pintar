import {useState, useEffect} from 'react';
import ItemList from '../itemList/ItemList';
import "./itemListContainer.css"
// import dataItems from '../../dataItems/DataItems'
import Loader from '../loader/Loader'
import { useParams } from 'react-router';
import { getFirestore } from '../../services/getFirebase';


// const promise = new Promise((resolve, reject)=>{
//     const status = 200
//     if(status===200){
//         setTimeout(() => {
            
//             resolve(dataItems)
//         }, 2000);
//     }else{
//           reject(console.log("Algo salio mal al cargar los datos"))
//     }
// })

function ItemListContainer () {
    
    const [data, setData] = useState([])
    const [loading, setloading] = useState(true)
    const {categoryId}= useParams()


    useEffect(() => {

        if(categoryId) {

        const dbquery = getFirestore()

        dbquery.collection('data').where('category', '==', categoryId).get()

        .then(resp=>{
            setData(resp.docs.map(dataOne => ({id: dataOne.id, ...dataOne.data()})))
           
            console.log(resp)})
        .catch(err => console.log(err))
        .finally(()=>setloading(false))

        }

        else {
            const dbquery = getFirestore()

            dbquery.collection('data').get()
    
            .then(resp=>{
                setData(resp.docs.map(dataOne => ({id: dataOne.id, ...dataOne.data()})))
               
                console.log(resp)})
            .catch(err => console.log(err))
            .finally(()=>setloading(false))

        }

       

        
        // dbquery.collection('data').doc('6JIruyFli7OTmDkjsKUj').get()
        // if (categoryId === undefined) {
     
        // promise
        // .then(resp => setData(resp))
        // .catch(err => console.log(err))
        // .finally(()=>setloading(false))
        // }
        // else{
        //     promise
        //     .then(resp => setData(resp.filter(it=> it.category===categoryId)))
        //     .catch(err => console.log(err))
        //     .finally(()=>setloading(false))
        // }

        
   }, [categoryId])


console.log(data);
    
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


