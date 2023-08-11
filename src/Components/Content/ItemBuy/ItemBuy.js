import { Button } from "react-bootstrap";

const ItemBuy=({onAdd})=>{

    return(
        <div>
            <Button variant="primary" onClick={() => onAdd(1)}>Comprar</Button>
        </div>
    );
};

export default ItemBuy;