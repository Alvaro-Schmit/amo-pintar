import { useCartContext } from "../cartContext/CartContext";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { NavLink } from "react-router-dom";
import "./cart.css";

export default function Cart() {
  const { cartList, deleteFromCart } = useCartContext();

  return (
    <>
      <div className="cartContainer">
        <center>
          <h2>Resumen de tu compra</h2>
        </center>
        <div className="hoverMap">
          {cartList.map((item) => (
            <div className="articlesContainer" key={item.id}>
              <div className="divArticle">
                <img
                  src={item.data.image}
                  alt={item.data.name}
                  className="imageCart"
                />
              </div>

              <div className="divArticle">
                <h3>{item.data.name}</h3>
              </div>
              <div className="divArticle">
                <h4>{item.data.price}</h4>
              </div>

              <div className="divArticle">
                <Button
                onClick={()=>deleteFromCart(item)}
                variant="outlined"
                
                >
                 
                  <DeleteIcon>
                    <svg data-testid="DeleteIcon"></svg>
                  </DeleteIcon>
                </Button>
              </div>
            </div>
          ))}
        </div>
        <h2>Precio Total : </h2>
      </div>

      <div className="pagarVolver">
        {" "}
        <NavLink exact to={"/"} className="adquirirOtro">
          <Button
            variant="contained"
            color="primary"
            style={{ backgroundColor: "grey" }}
          >
            adquirir otra Obra de arte
          </Button>
        </NavLink>
        <NavLink exact to={"/"} className="adquirirOtro">
          <Button variant="contained" color="primary">
            Pagar
          </Button>
        </NavLink>
      </div>
    </>
  );
}
