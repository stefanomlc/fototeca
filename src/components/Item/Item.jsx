import React from "react";

const Item = ({info}) => {
    return (
        <a href="" className="product">
            <img src={info.image} alt="" />
            <p> {info.name} </p>
        </a>
    );
} 

export default Item;