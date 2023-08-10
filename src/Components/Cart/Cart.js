import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const Cart = () => {

    const {cart} = useContext(CartContext);
    console.log(cart);

    return(
        <div className="cart pt-5 pb-5">
            <div className="container">
                <h1>Carrito</h1>
                <hr/>
                {
                    cart.lengh===0? <p>Carrito vacio</p>
                    :<div>
                        {cart.map(unItem => <div key={unItem.id}>
                        <h3>Nombre: {unItem.name}</h3>
                        <img src={`http://localhost:3000/images/products/${unItem.image}`} alt={unItem.name}/>
                        <p>Cantidad {unItem.quantity}</p>
                        <p>Precio {unItem.precio}</p>

                        </div>)}
                    </div>
                }

                <Link to='/checkout'>Finalizar Compra</Link>
            </div>

        </div>
    );
}