import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../CartProvider/CartProvider";
import ItemCart from "../ItemCart/ItemCart";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import toast, { Toaster } from 'react-hot-toast';
import "./Cart.css";

function Cart() {
    const { cart, totalPrice } = useCartContext();

	const order = {
		buyer: {
			name: "Tato Lopez",
			email: "stefano@gmail.com",
			phone: "+541231231231",
			address: "Calle Falsa 123",
		},
		items: cart.map((product) => ({
			id: product.id,
			title: product.name,
			price: product.price,
			quantity: product.quantity,
		})),
		total: totalPrice(),
        
	};
    console.log(order);
    
	const handleClick = () => {

		const db = getFirestore();
		const ordersCollection = collection(db, "orders");
		addDoc(ordersCollection, order).then(({ id }) => notify());
	
	};
	const notify = (id) => toast.success('La orden a sido enviada');


    if (cart.length === 0) {
        return (
            <div className="container d-flex flex-column align-items-center">
                <p>No hay elementos en el carrito</p>
                <Link className="link-toHome" to="/"> Buscar imágenes</Link>
            </div>
        )
    }

    return (
        
        <div className="containe d-flex flex-column align-items-center">
			
			{
                cart.map(product => <ItemCart Key={product.id} product={product} />)
            }
			

			<div className="d-flex justify-content-center py-5">
				<p className="text-center d-flex txt-total-price">total: {totalPrice()}</p>
				<button className="btn-finish-order" onClick={handleClick}>Emitir compra</button>
			</div>
           

			<Toaster
			position="top-center"
			reverseOrder={false}
			/>


        </div>
    );
}

export default Cart;