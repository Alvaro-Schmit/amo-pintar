import ItemCount from "../itemCount/ItemCount";
import "./obrasDetail.css";
import "./itemDetail.css";
import { Button } from "@material-ui/core";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../cartContext/CartContext";

function ItemDetail({ data }) {
  const [cantidadSelect, setCantidadSelect] = useState(0);
  const [changeButton, setChangeButton] = useState(true);
  const { addToCart } = useCartContext;
  console.log(addToCart);
  console.log(cantidadSelect);

  const onAdd = (count) => {
   
    console.log(`Agregaste ${count} produto al carrito`);
    setCantidadSelect(count);
    setChangeButton(false);
    addToCart({data:data, counter:count })
  };

  return (
    <div className="bigcardContainer">
      <div className="cardContainer">
        {data.map((dat) => (
          <div className="cards" key={dat.id}>
            <div className="container111">
              <img
                src={dat.image}
                alt={dat.name}
                className={dat.detailClassName}
              />
            </div>
            <div className="container222">
              <div>
                <h2 className="tituloDetail">{dat.name}</h2>
                <p className="textObra">{dat.detaildescription}</p>
              </div>
              <div className="footerCards">
                {changeButton ? (
                  <>
                    <h4>{dat.price}</h4>
                    <ItemCount onAdd={onAdd} stock={4} initial={1} />
                  </>
                ) : (
                  <NavLink
                    exact
                    to={"/cart"}
                    style={{ textDecoration: "none" }}
                  >
                    <Button className="buttonTerminar" variant="contained">
                      Terminar tu compra
                    </Button>
                  </NavLink>
                )}

                {/* <Button className="button"
                                                        variant="contained"  >Comprar</Button> */}
              </div>
            </div>
            <div className="container333">
              <p className="textArtista">{dat.datosAutor}</p>
              <img
                src={dat.fotoArtista}
                alt={dat.artista}
                className="artistaStyle"
              />
              <h4>{dat.artista}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemDetail;
