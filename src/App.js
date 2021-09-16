import NavBar from './Componentes/navBar/NavBar'
// import ItemListContainer from './Componentes/itemListContainer/IitemListContainer.jsx'
import ItemDetailContainer from './Componentes/itemDetailContainer/ItemDetailContainer'
import ItemListContainer from './Componentes/itemListContainer/IitemListContainer.jsx'
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
         

          <Route exact path='/detalle/:nameId' component={ItemDetailContainer}/>
         
        </Switch>
    </Router>
  );
}

export default App;
