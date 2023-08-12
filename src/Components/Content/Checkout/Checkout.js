import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { CartContext } from "../../../Context/CartContext";
import { CartCheckout } from "../../CartCheckout/CartCheckout";

export const Checkout = () => {

    const[orderId, setOrderId] = useState();

    const[buyer, setBuyer] = useState({
        Nombre:"",
        Email:"",
        Telefono:""
    });

    const {Nombre, Email, Telefono} = buyer;

    const {cart, clear} = useContext(CartContext);

    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        const total = cart.reduce( (acum, unItem)=>acum+(unItem.price*unItem.quantity),0 );
        const dia = new Date();
        const data = {buyer, cart, total, dia};
        generateOrder(data);
        clear();
    }

    const generateOrder = async (data) =>{
        const querydb = getFirestore();
        const queryCollection = collection(querydb, "Orders");
        const order = await addDoc(queryCollection, data);
        setOrderId(order.id);
    }

    return (
        <div className="checkout pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h2>Checkout</h2>
                        {!orderId && <form onSubmit={handleSubmit}>
                            <input type="text" 
                                name="Nombre"
                                placeholder="Nombre"
                                value={Nombre}
                                onChange={handleInputChange}
                                required
                            />
                            <input type="email" 
                                name="Email"
                                placeholder="Email"
                                value={Email}
                                onChange={handleInputChange}
                                required
                            />
                            <input type="text" 
                                name="Telefono"
                                placeholder="Telefono"
                                value={Telefono}
                                onChange={handleInputChange}
                                required
                            />
                            <input type="submit" value="Confirmar Compra"/>
                        </form>
                        }
                        {orderId && <>
                        <h3>Compra realizada con exito!</h3>
                        <p>tu ID de compra es: {orderId}</p>
                        </>}
                    </div>
                    <div className="col-md-4 checkout--list">
                    {!orderId && <CartCheckout /> }
                    </div>
                </div>
            </div>
        </div>
    )
}