import {useState, useRef} from 'react';
import { IconButton, Popper, Grow, Button, Toolbar} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import CardWidgets from '../CardWidgets/CardWidgets';
import './cssNavBar/NavBar.css'
import { NavLink } from 'react-router-dom';


function NavBar({titulo}) {

  
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };


  return (
   
      <>
        <Toolbar className="navbar" >
          
          <IconButton
                        className="BtnMenu"
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                        edge="start"  
                        aria-label="menu" >
                  <MenuIcon />
              </IconButton>
      
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow {...TransitionProps} style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
                <div   style={{marginLeft:"-20px" }}>
                  <div className="menuDesplegable ">
                          <NavLink exact to='/' style={{textDecoration:"none"}}>
                                <Button className='menuLinks' key='01' >Todo</Button>
                            </NavLink>
                            <NavLink exact to='/category/Naturaleza' style={{textDecoration:"none"}}>
                                <Button className='menuLinks'key='02'>Naturaleza</Button>
                            </NavLink >
                            <NavLink exact to='/category/Personas' style={{textDecoration:"none"}}>
                                <Button className='menuLinks'key='03'>Personas</Button>
                            </NavLink>
                    
                  </div>
                </div>
            </Grow>
          )}
        </Popper>
          
               <div>
                 <h1 className="titulo">{titulo}</h1>
              </div>
              <div>
                <CardWidgets/>
              </div>
          
        </Toolbar>
      </>
   
  );
}

export default NavBar

// Puedes en crear un nuevo estado dentro del
// Componente que sea algo así como const [showSideBar, serShowSideBar] = useState(false); después usas un useEffect para que montes una setTimeOut y le des por ejemplo 3 seg para que sete el showSideBar a true … y con eso puede cambiar el valor de display: none … es una opción no más
// Mi sugerencia es que más que desaparezca, le asignes una propiedad en css para que cuando la página sea menor (por ejemplo a 760) solo desaparezca