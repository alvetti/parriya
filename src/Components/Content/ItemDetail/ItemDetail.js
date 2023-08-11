import { Col, Row } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { CartContext } from "../../../context/CartContext";

const ItemDetail=({item})=>{

    const {addItem} = useContext(CartContext);

    const handleOnAdd = (count) => {
        addItem({id: item.id, price: item.price, name: item.name, image: item.image}, count);
    };

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
                <ItemCount stock={item.stock} initial={1} onAdd={handleOnAdd}/>
                </Col>
            </Row>

        </div>
        
    )
}
export default ItemDetail;