import ItemList from "../ItemList/ItemList";
import HeroBanner from '../HeroBanner/HeroBanner';
import arrayProducts from '../../../Products/arrayProducts.json';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () =>{
    
    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        const promesa = new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(id ? arrayProducts.filter(item=> item.category === id) : arrayProducts)
            }, 1000)
        });
        promesa.then((data)=>{
            setItem(data)
        });
    }, [id]);

    return(
        <div className='content'>
            <HeroBanner title='Parrilla Premium Ya' subtitle='Todo de especial para tu asado' readmoreText='Sepa mas' readmoreLink='#'/>
            <div className="item_list">
                <div className="container">
                    <ItemList item={item}/>
                </div>
            </div>
        </div>
        
    )
}
export default ItemListContainer;