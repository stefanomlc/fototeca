import Raect from "react";
import "./NavBar.css"

export const Navbar = () =>{
    return (
        <div className="container ">
           <nav className="nav justify-content-around">
                <div className="nav__brand">
                    <a className="nav__link" href="#">Fototeca</a>
                </div>
                <ul className="d-flex justify-content-around">
                    <li>
                        <a className="nav__link" href="#"> Alimentos</a>
                    </li>
                    <li>
                        <a className="nav__link" href="#"> Bebidas</a>
                    </li>
                    <li>
                        <a className="nav__link" href="#"> Conservas</a>
                    </li>
                </ul>
            </nav> 
        </div>
        
        
    );
}

export default Navbar;