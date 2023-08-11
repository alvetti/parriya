import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {

        const {getQuantity} = useContext(CartContext);

    return (
        <Link to='/cart'>
        <div className="cart">
            <div className="cart--icon">
                <i className="fa-solid fa-bag-shopping"></i>                
                <span className="cart--icon__counter">{getQuantity()}</span>
            </div>
            <div className="cart--value">
                <p>Mi Carrito</p>
                <div className="cart--value__price">$ 0,00</div>
            </div>
        </div>
        </Link>
    );
}
export default CartWidget;