import React from "react";
import { useState } from "react";
import { Button } from "@material-ui/core";
import "./itemCount.css";



function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  
  const handleCount = (value) => {
    
    setCount(count + value)
    console.log("item count",count)
  };

  return (
   <>
      <div className="counterContainer">
        <div className="counter">
          <button
            className="button"
            disabled={count === initial ? true : false}
            onClick={() => handleCount(-1)}
          >
            -
          </button>

          <p>{count}</p>

          <button
            className="button"
            disabled={count === stock ? true : false}
            onClick={() => handleCount(+1)}
          >
            +
          </button>
        </div>
        <Button
          className="buttonAgregar"
          variant="contained"
          disabled={stock === 0 ? true : false}
          onClick={() => onAdd(count)}
        >
          Comprar
        </Button>
      </div>
    </>
  );
}

export default ItemCount;
