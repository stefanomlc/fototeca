import React from "react";
import { useCartContext } from "../CartProvider/CartProvider";


export const CartWidget = () => {
    const {totalProducts} = useCartContext();

    return (
        <>
            <i className="bi bi-basket3-fill"></i>
            <span>{totalProducts() ||  ""}</span>
        </>
        

    );

}

export default CartWidget;