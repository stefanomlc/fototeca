import React from "react";
import { useCartContext } from "../CartProvider/CartProvider";

import "./ItemCart.css";

const ItemCart = ({ product }) => {
    const {removeProduct} = useCartContext();

    return (
        <div className="itemCart d-flex justify-content-evenly ">
            <img src={product.image} alt={product.title} />
            <div className="product-description">
                <p>Nombre: {product.name}</p>
                <p>Marca: {product.brand}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio: {product.price}</p>
                <p>Subtotal: {product.quantity * product.price}</p>
                <button className="product-remove" onClick={() => removeProduct(product.id)}>Eliminar</button>
                
            </div>
        </div>
    )
}

export default ItemCart;