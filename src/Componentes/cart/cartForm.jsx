import { useState } from "react";
import { useCartContext } from "../cartContext/CartContext";
import { getFirestore } from "../../services/getFirebase";
import firebase from "firebase";
import "firebase/firestore";
import "./cartForm.css";

const CartForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    email: "",
  });

  const { cartList, totalPrice } = useCartContext();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    let orden = {};

    orden.date = firebase.firestore.Timestamp.fromDate(new Date());

    orden.buyer = formData;

    orden.total = totalPrice();

    orden.datas = cartList.map((cartItem) => {
      const id = cartItem.data.id;
      const title = cartItem.data.name;
      const price = cartItem.data.price * cartItem.quantity;

      return { id, title, price };
    });

    const db = getFirestore();
    db.collection("orders")
      .add(orden)
      .then((resp) => console.log(resp.id))
      .catch((err) => console.log(err))
      .finally(() =>
        setFormData({
          name: "",
          tel: "",
          email: "",
        })
      );
  };

  function handleOnChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  console.log(formData);
  return (
    <div className="formContainer">
      <center>
        <div>
          <form
            onSubmit={handleOnSubmit}
            onChange={handleOnChange}
            className="form"
          >
            <input
              type="text"
              placeholder="ingrese el nombre"
              name="name"
              value={formData.name}
            />
            <input
              type="text"
              placeholder="ingrese su nro de tel"
              name="tel"
              value={formData.tel}
            />
            <input
              type="text"
              placeholder="ingrese su email"
              name="email"
              value={formData.email}
            />

            <button className="terminarCompra">TERMINAR COMPRA</button>
          </form>
        </div>
      </center>
    </div>
  );
};

export default CartForm;
