import { useState, useEffect } from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import "./itemDetailContainer.css";
import Loader from "../loader/Loader";
import { useParams } from "react-router";
import { getFirestore } from "../../services/getFirebase";


function ItemDetailContainer() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    
    if(itemId){

      const dbqueryDetail = getFirestore() 

      dbqueryDetail.collection('data').doc(itemId).get()
.then ((resp)=>{  


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
