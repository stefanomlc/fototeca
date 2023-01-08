import React from "react";
import "./Item.css";
import {Link} from "react-router-dom";

const Item = ({info}) => {
    return (
        <Link to={`/detalle/${info.id}`} className="product">
            <img src={info.imagen} alt="" />
            <p> Nombre: {info.name} </p>
            <p> Precio: {info.price}</p>
            <p> Stock: {info.stock}</p>
        </Link>
    );
} 

export default Item;