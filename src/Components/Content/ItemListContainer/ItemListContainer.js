import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import HeroBanner from '../HeroBanner/HeroBanner';

const ItemListContainer=()=>{
    const[product, setProduct] = useState([]);

    const getProducts = async()=>{
        const response = await fetch('https://mocki.io/v1/5922d8bf-f411-44f0-bbd9-281557a5223d');
        const data = await response.json();
        setProduct(data);
    }
    useEffect(()=>{
        getProducts();
    }, []);

    return(
        <div className='content'>
            <HeroBanner title='Parrilla Premium Ya' subtitle='Todo de especial para tu asado' readmoreText='Sepa mas' readmoreLink='#'/>
            <div className="item_list">
                <div className="container">
                    <ul className="products">
                        {product.map((p)=>{
                            return(
                                <ItemList
                                key={p.id}
                                id={p.id}
                                type={p.type}
                                name={p.name}
                                price={p.price}
                                quantity={p.quantity}
                                img={p.photo}
                                />
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
        
    )
}
export default ItemListContainer;