import React, {useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


const productos = [
    { id: 1, category:"alimentos" , name: "Fideos", marca: "Marolio", price: "200", sotck: "50" , imagen: "https://carrefourar.vtexassets.com/arquivos/ids/178800/7797470003121_02.jpg?v=637468580346430000" },
    { id: 2, category:"bebidas" , name: "Atun", marca: "Marolio", price: "1000", sotck: "25" , imagen: "https://http2.mlstatic.com/D_NQ_NP_685892-MLA42704514227_072020-O.jpg" },
    { id: 3, category:"conservas" , name: "Amargo", marca: "Marolio", price: "300", sotck: "15" , imagen: "https://marolio.com.ar/sites/default/files/styles/blog_image/public/botellas-4%20%281%29.jpg?itok=MY0Eoctd" }

]

export const ItemDetailContainer = () => {
    const [data, setData ] = useState({});
    const {detalleId} = useParams();
    

    useEffect(() => {
        const getData = new Promise (resolve => {
            setTimeout(() => {
                resolve(productos)                
            }, 1500);
        });
        getData.then(res => setData(res.find(product => product.id === parseInt(detalleId))));
    }, [])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;