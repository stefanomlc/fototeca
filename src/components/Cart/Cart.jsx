import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../CartProvider/CartProvider";
import ItemCart from "../ItemCart/ItemCart";

function Cart() {
    const { cart, totalPrice} = useCartContext();

    if (cart.length === 0) {
        return (
            <>
                <p>No hay elementos en el carrito</p>
                <Link to="/"> Buscar imágenes</Link>
            </>
        )
    }

    return (
        <>
            {
                cart.map(product => <ItemCart Key={product.id} product={product} />)
            }

            <p>total: {totalPrice()}</p>

        </>
    );
}

export default Cart;