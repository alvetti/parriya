import { useState } from "react";

const CartWidget = () => {

    const [quantity, setQuantity] = useState(0);

    return (
        <div className="cart">
            <div className="cart--icon">
                <i class="fa-solid fa-bag-shopping"></i>
                <span className="cart--icon__counter">{quantity}</span>
            </div>
            <div className="cart--value">
                <p>Mi Carrito</p>
                <div className="cart--value__price">$ 0,00</div>
            </div>
        </div>
    );
}
export default CartWidget;