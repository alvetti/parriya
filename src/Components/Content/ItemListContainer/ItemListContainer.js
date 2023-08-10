import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import HeroBanner from '../HeroBanner/HeroBanner';
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';


const ItemListContainer = () =>{

    const {id} = useParams();

    const [item, setItem] = useState([]);
    
    const [load, setLoad] = useState(true);

    const getData = async (categoria) => {
        setLoad(true);
        const querydb = getFirestore();
        const queryCollection = categoria ? query(collection(querydb, 'products'), where("category", "==", categoria))
                                          :collection(querydb, 'products');
        const results = await getDocs(queryCollection);
        const datos = results.docs.map(p => ({ id: p.id, ...p.data() }));
        setItem(datos);
        setLoad(false);
    }

    useEffect(()=>{
        getData(id);
    }, [id]);

    return(
        <div className='content'>
            <HeroBanner title='Parrilla Premium Ya' subtitle='Todo de especial para tu asado' readmoreText='Sepa mas' readmoreLink='#'/>
            <div className="item_list">
                <div className="container">
                    {load ? <Spinner /> : <ItemList item={item}/>}
                </div>
            </div>
        </div>
        
    )
}
export default ItemListContainer;