import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail=({item})=>{

    const {addItem} = useContext(CartContext);

    const handleOnAdd = (count) => {
        addItem({id: item.id, price: item.price, name: item.name, image: item.image}, count);
    };

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

    return(

        <div>
            <div className="row">
                <div className="col-lg-8">
                    <img src={`http://localhost:3000/images/products/${item.image}`} className="img" alt={item.name}/>
                </div>
                <div className="col-lg-4">
                    <div className="breadcrumb">
                        <Link to="/">Inicio</Link> <i className="fa-solid fa-chevron-right"></i> <Link to={`/category/${item.category}`}>{categoryName()}</Link> <i className="fa-solid fa-chevron-right"></i> {item.name}
                    </div>
                    <h2>{item.name}</h2>
                    <span className="price">$ {item.price}.00</span>
                    <span className="promo"><i className="fa-regular fa-credit-card"></i> 3 cuotas sin interés de $ { Number((item.price / 3).toFixed(2)) }</span>
                    <ItemCount stock={item.stock} initial={1} onAdd={handleOnAdd}/>
                    <div className="description">
                    <p>{item.description}</p>
                </div>
                </div>
            </div>

        </div>
        
    )
}
export default ItemDetail;