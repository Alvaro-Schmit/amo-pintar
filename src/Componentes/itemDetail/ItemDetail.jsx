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

    addToCart(data, count );
    
    setCantidadSelect(cantidadSelect);
    setChangeButton(false);
  };
 console.log(data);

  return (
    <div className="bigcardContainer">
      <div className="cardContainer">
        
          <div className="cards" key={data.id}>
            <div className="container111">
              <img
                src={data.image}
                alt={data.name}
                className={data.detailClassName}
              />
            </div>
            <div className="container222">
              <div>
                <h2 className="tituloDetail">{data.name}</h2>
                <p className="textObra">{data.detailDescription}</p>
              </div>
              <>
                {changeButton ? (
                  <div className="footerCards">
                    <h4>U$S {data.price}</h4>
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
              <p className="textArtista">{data.datosAutor}</p>
              <img
                src={data.fotoArtista}
                alt={data.artista}
                className="artistaStyle"
              />
              <h4>{data.artista}</h4>
            </div>
          </div>
     
      </div>
    </div>
  );
}

export default ItemDetail;
