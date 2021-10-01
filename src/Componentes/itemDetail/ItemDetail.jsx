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
  const { addToCart } = useCartContext();

  const onAdd = (count) => {
    console.log(`Agregaste ${count} produto al carrito`);

    addToCart({ data,  count });

    setCantidadSelect(cantidadSelect);
    setChangeButton(false);
  };
  console.log(addToCart);

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
              <>
                {changeButton ? (
                  <div className="footerCards">
                    <h4>{dat.price}</h4>
                    <ItemCount onAdd={onAdd} stock={4} initial={1} />
                  </div>
                ) : (
                  <div className="terminarAdquirir">
                    <NavLink
                      exact
                      to={"/cart"}
                      className="buttonTerminar"
                    >
                      <Button  
                      variant="contained" fullWidth
                      color="primary"
                      >
                        Terminar tu compra
                      </Button>
                    </NavLink>
                    <NavLink
                      exact
                      to={"/"}
                      className="adquirirOtro"
                    >
                    <Button  variant="contained" style={{width:'100%'}}>
                      Adquirir otra Obra
                    </Button>
                    </NavLink>
                  </div>
                )}
              </>
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
