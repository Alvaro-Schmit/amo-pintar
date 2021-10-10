import { useState, useEffect } from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import "./itemDetailContainer.css";
import dataItems from "../../dataItems/DataItems";
import Loader from "../loader/Loader";
import { useParams } from "react-router";
import { getFirestore } from "../../services/getFirebase";

const getItem = new Promise((resolve, reject) => {
  const status = 200;
  if (status === 200) {
    setTimeout(() => {
      resolve(dataItems);
    }, 2000);
  } else {
    reject(console.log("Algo salio mal al cargar los datos"));
  }
});

function ItemDetailContainer() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    
    if(itemId){

      const dbqueryDetail = getFirestore() 

      dbqueryDetail.collection('data').doc(itemId).get()
.then ((resp)=>{  

  console.log(resp);
          setData({id: resp.id, ...resp.data()});})

          .catch(err => console.log(err))
          .finally(()=>setloading(false))
      
    }
    else{
       const dbqueryDetail = getFirestore() 

      dbqueryDetail.collection('data').doc(itemId).get()
      .then(resp=>{
        setData(resp.docs.map(dataOne => ({id: dataOne.id, ...dataOne.data()})))
       
        console.log(resp)})
    .catch(err => console.log(err))
    .finally(()=>setloading(false))


    }
  
}  , [itemId]);

  return (
    <div>
      {loading ? (
        <div className="loaderContainer">
          <Loader />
        </div>
      ) : (
        <div>
          
          <ItemDetail data={data} />
        </div>
      )}
    </div>
  );
}

export default ItemDetailContainer;
