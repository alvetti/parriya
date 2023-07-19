import { Button } from "react-bootstrap";
import useCounter from "../../Header/UseCounter/UseCounter";

const ItemCount=()=>{

    const{counter, increase, decrease} = useCounter(0);

    return(
        <div className="button-wrapper">
            <Button variant="primary" onClick={decrease}>-</Button>
            <span>{counter}</span>
            <Button variant="primary" onClick={increase}>+</Button>
        </div>
    );
};

export default ItemCount;