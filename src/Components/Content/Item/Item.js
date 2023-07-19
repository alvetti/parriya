import { Button } from "react-bootstrap";
import useCounter from "../../Header/UseCounter/UseCounter";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const Item=({item})=>{

    const{counter, increase, decrease} = useCounter(0);

    return(
        <div className="item-wrapper">
            <Link to={`/item/${item.id}`}><img className="products-item__img" src={`http://localhost:3000/images/products/${item.image}`} alt={item.name}/></Link>
            <div className="products--item__desc">
                <Link to={`/item/${item.id}`}><h4>{item.name}</h4></Link>
                <div className="price">$ {item.price}.00</div>
                <ItemCount/>
            </div>
        </div>
    );
};

export default Item;