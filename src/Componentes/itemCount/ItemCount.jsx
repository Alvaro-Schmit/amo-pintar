import React, { createContext } from "react";
import { useState } from "react";
import { Button } from "@material-ui/core";
import "./itemCount.css";

export const contextCount = createContext([]);

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const handleCount = (value) => {
    setCount(count + value);
  };

  return (
    <contextCount.Provider value={count}>
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
    </contextCount.Provider>
  );
}

export default ItemCount;
