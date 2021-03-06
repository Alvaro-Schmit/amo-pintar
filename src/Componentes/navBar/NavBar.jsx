import { useState, useRef } from "react";
import { IconButton, Popper, Grow, Button, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import CardWidgets from "../CardWidgets/CardWidgets";
import "./cssNavBar/NavBar.css";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../cartContext/CartContext";

function NavBar({ titulo }) {
  const { iconCart } = useCartContext();

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <>
      <Toolbar className="navbar">
        <IconButton
          className="BtnMenu"
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          edge="start"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>

        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <div style={{ marginLeft: "-20px" }}>
                <div className="menuDesplegable ">
                  <NavLink exact to="/" style={{ textDecoration: "none" }}>
                    <Button className="menuLinks" key="01">
                      Todo
                    </Button>
                  </NavLink>
                  <NavLink
                    exact
                    to="/category/Naturaleza"
                    style={{ textDecoration: "none" }}
                  >
                    <Button className="menuLinks" key="02">
                      Naturaleza
                    </Button>
                  </NavLink>
                  <NavLink
                    exact
                    to="/category/Retratos"
                    style={{ textDecoration: "none" }}
                  >
                    <Button className="menuLinks" key="03">
                      Personas
                    </Button>
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
          <NavLink exact to={"/cart"}>
            <div className="numberCardWidgets">
              {iconCart() === 0 ? (
                <>
                  <p></p>
                </>
              ) : (
                <>
                  <p style={{ textDecoration: "none" }}> {iconCart()}</p>
                </>
              )}

              <CardWidgets />
            </div>
          </NavLink>
        </div>
      </Toolbar>
    </>
  );
}

export default NavBar;

// Puedes en crear un nuevo estado dentro del
// Componente que sea algo as?? como const [showSideBar, serShowSideBar] = useState(false); despu??s usas un useEffect para que montes una setTimeOut y le des por ejemplo 3 seg para que sete el showSideBar a true ??? y con eso puede cambiar el valor de display: none ??? es una opci??n no m??s
// Mi sugerencia es que m??s que desaparezca, le asignes una propiedad en css para que cuando la p??gina sea menor (por ejemplo a 760) solo desaparezca
