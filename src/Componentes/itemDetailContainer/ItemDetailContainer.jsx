import { useState, useEffect } from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import "./itemDetailContainer.css";
import dataItems from "../../dataItems/DataItems";
import Loader from "../loader/Loader";
import { useParams } from "react-router";

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
    getItem
      .then((resp) => {
        console.log(resp);
        if (itemId) {
          const product = resp.filter((item) => item.name === itemId);
          setData(product);
        } else {
          console.log("producto no existente");
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setloading(false));
  }, [itemId]);

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
