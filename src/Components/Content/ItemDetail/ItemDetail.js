import { Col, Row } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail=({item})=>{

    return(

        <div>
            <Row>
                <Col md={4}>
                <img src={`http://localhost:3000/images/products/${item.image}`} className="img" alt={item.name}/>
                </Col>
                <Col md={8}>
                <h2>{item.name}</h2>
                <span className="category">{item.category}</span>
                <span className="price">$ {item.price}</span>
                <ItemCount/>
                </Col>
            </Row>

        </div>
        
    )
}
export default ItemDetail;