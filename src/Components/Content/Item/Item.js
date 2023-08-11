import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const Item=({item})=>{

    const categoryName = () => {
        if (item.category === 'carnes'){
            return 'Carnes';
        } else if (item.category === 'guarniciones') {
            return 'Guarniciones';
        } else if (item.category === 'almacen') {
            return 'Almacén';
        } else if (item.category === 'bebidas') {
            return 'Bebidas';
        }
    }

    const {addItem} = useContext(CartContext);

    const handleOnAdd = (count) => {
        addItem({id: item.id, price: item.price, name: item.name, image: item.image}, count);
    };
    
    return(
        <div className="item-wrapper">
            <div className="category"><Link to={`/category/${item.category}`}>{categoryName()}</Link></div>
            <Link to={`/item/${item.id}`}><img className="products-item__img" src={`http://localhost:3000/images/products/${item.image}`} alt={item.name}/></Link>
            <div className="products--item__desc">
                <Link to={`/item/${item.id}`}><h4>{item.name}</h4></Link>
                <div className="price">$ {item.price}.00</div>
                <div className="buttons">
                    <ItemCount stock={item.stock} initial={1} onAdd={handleOnAdd}/>
                    <Link to={`/item/${item.id}`}><Button variant="secondary"><i class="fa-regular fa-eye"></i> Ver</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default Item;