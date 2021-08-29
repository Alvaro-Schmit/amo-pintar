import React from 'react';
import { Button, Toolbar} from "@material-ui/core";
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';
import { IconButton} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import './cssNavBar/NavBar.css'

function NavBar() {

  
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };


  return (
   
      <>
        <Toolbar className="navbar" >
          <div >
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
                  <div className="menuDesplegable "
                       autoFocusItem={open} >
                       
                            <Button className='menuLinks' >Todo</Button>
                       
                            <Button className='menuLinks'>Naturaleza</Button>
                      
                            <Button className='menuLinks'>Personas</Button>
                    
                  </div>
                </div>
            </Grow>
          )}
        </Popper>
          </div>
          <div>
           
                 <h1 className="titulo">Amo Pintar</h1>
           
            </div>
          
        </Toolbar>
      </>
   
  );
}

export default NavBar