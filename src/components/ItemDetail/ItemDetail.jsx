import React, {useState} from 'react';
import ItemCount from '../Navbar/ItemCount/ItemCount';
import "./ItemDetail.css";
import {Link} from "react-router-dom";
import { useCartContext } from '../CartProvider/CartProvider';
//import { CartContext } from '../../App';


export const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);
    }

    return (
        <div className='container d-flex'>
            <img className='detail__image' src={data.image} alt="" />
            <div className='content'>
                <h1>{data.brand}</h1>
                <p>descripción</p>
                {
                    goToCart
                        ? <Link to="/cart">Terminar compra</Link>
                        : <ItemCount initial={1} stock={10} onAdd={onAdd} />
                }

                
            </div>
        </div>
    );
}

export default ItemDetail;