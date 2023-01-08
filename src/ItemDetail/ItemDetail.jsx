import React from 'react';
import "./ItemDetail.css"; 

export const ItemDetail = ({data}) => {
    console.log("la props son")
    console.log(data.marca)

    return (
        <div className='container d-flex'>
            <img className='detail__image' src={data.imagen} alt="" />
            <div className='content'>
                <h1>{data.marca}</h1>
                <p>descripción</p>
            </div>
        </div>
    );
}

export default ItemDetail;