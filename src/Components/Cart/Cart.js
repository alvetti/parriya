import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const Cart = () => {

    const {cart, getTotal, clear, removeItem, openCart} = useContext(CartContext);

    return(
        <div className="cartpage">
            <div className="cartpage--heading">
                <h3>Carrito de Compras</h3>
                <Button onClick={openCart}><i className="fa-solid fa-xmark"></i></Button>
            </div>
                {
                    cart.length === 0? <div className="emptycart">Carrito vacio</div>
                    :
                    <div className="cartpage--content">
                        <div className="cartpage--list">
                            {cart.map(unItem => 
                            <div key={unItem.id} className="cartpage--list__item">
                            <img src={`http://localhost:3000/images/products/${unItem.image}`} alt={unItem.name}/>
                            <div className="description">
                                <h4><span>{unItem.quantity}x </span>{unItem.name}</h4>
                                <p>$ {(unItem.price) * unItem.quantity}.00</p>
                            </div>
                            <Button className="trash" onClick={() => removeItem(unItem.id)}><i className="fa-solid fa-trash-can"></i></Button>
                            </div>)}
                        </div>
                        <div className="cartpage--total">
                            <p className="cartpage--total__text">Total:</p>
                            <div className="cartpage--total__price">
                                $ {getTotal()}.00
                                <span className="promo"><i className="fa-regular fa-credit-card"></i> 3 cuotas sin interés de $ { Number((getTotal() / 3).toFixed(2)) }</span>
                            </div>
                        </div>
                        <Link onClick={openCart} to='/checkout' className="cartpage--checkout"><Button variant="primary">Finalizar Compra</Button></Link>
                        <Button onClick={clear} className="cartpage--clear">Vaciar Carrito</Button>
                    </div>
                    
                }
        </div>
    );
}