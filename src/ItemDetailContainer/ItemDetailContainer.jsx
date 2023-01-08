import React, {useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';


const imagen = { id: 1, name: "Fideos", marca: "Marolio", price: "200", sotck: "50" , imagen: "https://carrefourar.vtexassets.com/arquivos/ids/178800/7797470003121_02.jpg?v=637468580346430000" };

export const ItemDetailContainer = () => {
    const [data, setData ] = useState({});

    useEffect(() => {
        const getData = new Promise (resolve => {
            setTimeout(() => {
                resolve(imagen)                
            }, 3000);
        });
        getData.then(res => setData(res));
    }, [])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;