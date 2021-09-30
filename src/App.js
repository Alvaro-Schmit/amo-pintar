import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createContext, useState } from "react";
import NavBar from "./Componentes/navBar/NavBar";
import ItemDetailContainer from "./Componentes/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Componentes/itemListContainer/IitemListContainer.jsx";
import Cart from "./Componentes/cart/Cart";
import CardContextProvider from './Componentes/cartContext/CartContext'



const categorias = [
  { nombre: "pantalon", id: 111, color: "verde" },
  { nombre: "remera", id: 222, color: "rojo" },
  { nombre: "buso", id: 333, color: "azul" }
];

 export const contextApp = createContext([]);
function App() {

  const [state, setState] = useState(categorias)

  function setStateContext (item){
    setState(item)
  }

  
  return (
    <CardContextProvider>
    <contextApp.Provider value={{state, setStateContext}}>
      <Router>
        <NavBar titulo="Amo pintar" />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route
            exact
            path="/category/:categoryId"
            component={ItemListContainer}
          />

          <Route
            exact
            path="/detalle/:itemId"
            component={ItemDetailContainer}
          />

          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Router>
    </contextApp.Provider>
    </CardContextProvider>
  );
}

export default App;
