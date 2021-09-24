import NavBar from './Componentes/navBar/NavBar'
import ItemDetailContainer from './Componentes/itemDetailContainer/ItemDetailContainer'
import ItemListContainer from './Componentes/itemListContainer/IitemListContainer.jsx'
import Cart from './Componentes/cart/Cart'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <NavBar titulo='Amo pintar'/>
        <Switch>
          <Route exact path='/'>
            <ItemListContainer/>  
          </Route>
          <Route exact path='/category/:categoryId' component={ItemListContainer}/>
         
          <Route exact path='/detalle/:itemId' component={ItemDetailContainer}/>
         
          <Route exact path='/cart' component={Cart}/>
        </Switch>
    </Router>
  );
}

export default App;
