import { useState, useEffect } from "react";
import ItemList from "../itemList/ItemList";
import "./itemListContainer.css";
import Loader from "../loader/Loader";
import { useParams } from "react-router";
import { getFirestore } from "../../services/getFirebase";

function ItemListContainer() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      const dbquery = getFirestore();

      dbquery
        .collection("data")
        .where("category", "==", categoryId)
        .get()

        .then((resp) => {
          setData(
            resp.docs.map((dataOne) => ({ id: dataOne.id, ...dataOne.data() }))
          );
        })
        .catch((err) => console.log(err))
        .finally(() => setloading(false));
    } else {
      const dbquery = getFirestore();

      dbquery
        .collection("data")
        .get()

        .then((resp) => {
          setData(
            resp.docs.map((dataOne) => ({ id: dataOne.id, ...dataOne.data() }))
          );
        })
        .catch((err) => console.log(err))
        .finally(() => setloading(false));
    }
  }, [categoryId]);

  return (
    <div>
      {loading ? (
        <div className="loaderContainer">
          <Loader />
        </div>
      ) : (
        <ItemList data={data} greting="Bien Venido" />
      )}
    </div>
  );
}

export default ItemListContainer;
