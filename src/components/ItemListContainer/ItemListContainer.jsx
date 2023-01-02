import React from "react";
import ItemCount from "../Navbar/ItemCount/ItemCount";


export default ItemListContainer =>{

    const onAdd = (quantity) => {
        console.log(`compraste ${quantity} unidades`)
    }

    return (
        <ItemCount initial={1} stock={10} onAdd={onAdd}/>
    )
}