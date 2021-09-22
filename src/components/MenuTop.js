import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Menu = styled.nav`
min-width: 50vw;
justify-content:space-between;
font-size:1.8rem;
`
const MenuTop = ()=>{
    return(
        <Menu className="flex">
            <NavLink className="enlaceMenu" exact to="/" activeClassName="focusLink" >Inicio</NavLink>
            <NavLink className="enlaceMenu" exact to="/blog" activeClassName="focusLink" >Blog</NavLink>
            <NavLink className="enlaceMenu" exact to="/contacto" activeClassName="focusLink" >Contacto</NavLink>
            <NavLink className="enlaceMenu" exact to="/productos" activeClassName="focusLink" >Productos</NavLink>
            <NavLink className="enlaceMenu" exact to="/tecnologias" activeClassName="focusLink" >Tech</NavLink>
            <NavLink className="enlaceMenu" exact to="/no-found" activeClassName="focusLink" >No Found</NavLink>
        </Menu>
    )
}

export{MenuTop}