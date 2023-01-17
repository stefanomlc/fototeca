import Raect from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";

export const Navbar = () =>{
    return (
        <div className="container ">
           <nav className="nav justify-content-around py-5">
                <div className="nav__brand">
                    <NavLink className="nav__link" to="/">Fototeca</NavLink>
                </div>
                <ul className="d-flex justify-content-around">
                    <li>
                        <NavLink className="nav__link" to="/categoria/alimentos"> Alimentos</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav__link" to="/categoria/bebidas"> Bebidas</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav__link" to="/categoria/conservas"> Conservas</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav__link" to="/cart">
                            <CartWidget/>
                            </NavLink>
                    </li>
                </ul>
            </nav> 
        </div>
        
        
    );
}

export default Navbar;