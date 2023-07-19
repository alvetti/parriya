import { Container } from 'react-bootstrap';
import arrayProducts from '../../../Products/arrayProducts.json';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer=()=>{

    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        const promesa = new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(arrayProducts.find(item=> item.id === parseInt(id)))
            }, 1000)
        });
        promesa.then((data)=>{
            setItem(data)
        });
    }, [id]);

    return(

        <div className='product mt-5 mb-5'>
            <Container>
                <ItemDetail item={item}/>
            </Container>
        </div>
        
    )
}
export default ItemDetailContainer;