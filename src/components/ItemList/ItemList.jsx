import Item from "../Item/Item";
import React from "react";
import './ItemList.css';

const ItemList = ({data = [] }) => {
    return (
        
        data.map (product => <Item key={product.id} info={product}/>)
        
    );
}

export default ItemList;