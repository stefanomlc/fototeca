import React, {useEffect, useState} from "react";
import ItemCount from "../Navbar/ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";


const productos = [
    { id: 1, name: "Fideos", marca: "Marolio", price: "200", sotck: "50" , imagen: "https://carrefourar.vtexassets.com/arquivos/ids/178800/7797470003121_02.jpg?v=637468580346430000" },
    { id: 2, name: "Atun", marca: "Marolio", price: "1000", sotck: "25" , imagen: "https://http2.mlstatic.com/D_NQ_NP_685892-MLA42704514227_072020-O.jpg" },
    { id: 3, name: "Amargo", marca: "Marolio", price: "300", sotck: "15" , imagen: "https://marolio.com.ar/sites/default/files/styles/blog_image/public/botellas-4%20%281%29.jpg?itok=MY0Eoctd" }

]

export default ItemListContainer => {
    //es importante crear el estado que vamos a pasar
    const [data, setData] = useState ([]);

    useEffect (() => {
        const getData = new Promise (resolve => {
            setTimeout(() => {
                resolve(productos);
            }, 3000);
        });
        getData.then(res => setData(res));

    }, [])

    const onAdd = (quantity) => {
        console.log(`compraste ${quantity} unidades`)
    }

    return (
        <>
        <h1>Item List Container</h1>
        <ItemCount initial={1} stock={10} onAdd={onAdd} />
        <ItemList data={data}/>
        </>
    );
}