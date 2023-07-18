import { Button } from "react-bootstrap";
import useCounter from "../../Header/UseCounter/UseCounter";
import { Link, useParams } from "react-router-dom";

const ItemList=({id,name,price,img})=>{

    const{counter, increase, decrease} = useCounter(0);

    return(
        <li className="products--item" id={id}>
            <Link to={`/carnes/${id}`}><img className="products-item__img" src={`images/products/${img}`} alt={name}/></Link>
            <div className="products--item__desc">
                <Link to={`/carnes/${id}`}><h4>{name}</h4></Link>
                <div className="price">$ {price}.00</div>
                <div className="button-wrapper">
                    <Button variant="primary" onClick={decrease}>-</Button>
                    <span>{counter}</span>
                    <Button variant="primary" onClick={increase}>+</Button>
                </div>
            </div>
        </li>
    );
};

export default ItemList;