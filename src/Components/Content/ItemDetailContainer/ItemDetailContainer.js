import { Container } from 'react-bootstrap';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {getFirestore, doc, getDoc} from 'firebase/firestore';

const ItemDetailContainer=()=>{

    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'products', id);
        getDoc(queryDoc)
        .then(res => setItem(({id: res.id, ...res.data()})))

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