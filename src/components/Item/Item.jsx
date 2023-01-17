import React, {useContext} from "react";
import "./Item.css";
import {Link} from "react-router-dom";
import CartProvider from "../CartProvider/CartProvider";

const Item = ({info}) => {
    const producto = useContext(CartProvider);

    return (
        <Link to={`/detalle/${info.id}`} className="product d-flex justify-content-evenly">
            <img src={info.image} alt="" />
            <div className="product-info">
                <p> Nombre: {info.name} </p>
                <p> Precio: {info.price}</p>
                <p> Stock: {info.stock}</p>
            </div>
 
        </Link>
    );
} 

export default Item;