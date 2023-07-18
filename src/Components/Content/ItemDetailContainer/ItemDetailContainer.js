import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ItemDetailContainer=()=>{
    const {id} = useParams();

    return(

        <div className='content mt-5 mb-5'>
            <Container>
                <h1>Item Id: {id}</h1>
            </Container>
        </div>
        
    )
}
export default ItemDetailContainer;