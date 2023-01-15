import React from "react";
import { useCartContext } from "../CartProvider/CartProvider";

import "./ItemCart.css";

const ItemCart = ({ product }) => {
    const {removeProduct} = useCartContext();

    return (
        <div className="itemCart">
            <img src={product.image} alt={product.title} />
            <div>
                <p>Nombre: {product.title}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio: {product.price}</p>
                <p>Subtotal: {product.quantity * product.price}</p>
                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
                
            </div>
        </div>
    )
}

export default ItemCart;