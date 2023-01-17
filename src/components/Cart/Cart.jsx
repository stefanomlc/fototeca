import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../CartProvider/CartProvider";
import ItemCart from "../ItemCart/ItemCart";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import toast, { Toaster } from 'react-hot-toast';

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
            <div className="container justify-content-evenly">
                <p>No hay elementos en el carrito</p>
                <Link to="/"> Buscar imágenes</Link>
            </div>
        )
    }

    return (
        
        <div className="container ">
			
			{
                cart.map(product => <ItemCart Key={product.id} product={product} />)
            }
			


            <p>total: {totalPrice()}</p>


			<button onClick={handleClick}>Emitir compra</button>

			<Toaster
			position="top-center"
			reverseOrder={false}
			/>


        </div>
    );
}

export default Cart;