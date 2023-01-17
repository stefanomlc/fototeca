import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../CartProvider/CartProvider";
import ItemCart from "../ItemCart/ItemCart";
import firebaseConfig from "../../firebase/config";
import firebase from 'firebase/app';
import { addDoc, collection, getFirestore } from "firebase/firestore";

function Cart() {
    const { cart, totalPrice, } = useCartContext();

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
/* 		const db = getFirestore();
		const ordersCollection = collection(db, "orders");
		const orderRef = (ordersCollection, order)
		console.log("order",order)
		console.log("db", orderRef)
		addDoc(orderRef).then(({ id }) => console.log(id)); */
		const db = getFirestore();
		const ordersCollection = collection(db, "orders");
		addDoc(ordersCollection, order).then(({ id }) => console.log(id));

/* 		const db = getFirestore();
		const docRef =  addDoc (collection(db, "orders"), {order});
		console.log("Document ID: ", docRef.id); */
/* 
		const db = firebase.firestore(); 
		const newOrder = order;
		console.log(newOrder);
		const dbRef = db.collection("orders").add(newOrder);
		console.log(dbRef.id); */


	
	};


    if (cart.length === 0) {
        return (
            <>
                <p>No hay elementos en el carrito</p>
                <Link to="/"> Buscar imágenes</Link>
            </>
        )
    }

    return (
        
        <div className="container">
        
            {
                cart.map(product => <ItemCart Key={product.id} product={product} />)
            }

            <p>total: {totalPrice()}</p>


			<button onClick={handleClick}>Emitir compra</button>


        </div>
    );
}

export default Cart;