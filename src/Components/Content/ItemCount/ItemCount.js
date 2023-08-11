import { Button } from "react-bootstrap";
import { useState } from "react";

const ItemCount=({stock, initial, onAdd})=>{

    const [count, setCount] = useState(initial);

    const increase = () => {
        if(count < stock){
            setCount(count+1);
        }
    }
    const decrease = () => {
        if(count > initial){
            setCount(count-1);
        }
    }

    return(
        <div className="buttons">
            <div className="button-wrapper">
                <Button variant="primary" onClick={() => decrease()}>-</Button>
                <span>{count}</span>
                <Button variant="primary" onClick={() => increase()}>+</Button>
            </div>
            <Button variant="primary" onClick={() => onAdd(count)}>Agregar al carrito</Button>
        </div>
    );
};

export default ItemCount;