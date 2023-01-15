import React, {useContext} from "react";
import "./Item.css";
import {Link} from "react-router-dom";
import CartProvider from "../CartProvider/CartProvider";

const Item = ({info}) => {
    const producto = useContext(CartProvider);

    return (
        <Link to={`/detalle/${info.id}`} className="product">
            <img src={info.image} alt="" />
            <p> Nombre: {info.name} </p>
            <p> Precio: {info.price}</p>
            <p> Stock: {info.stock}</p>
        </Link>
    );
} 

export default Item;