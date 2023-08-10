import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
            setCart([...cart, {...item, quantity}]);
    };
    useEffect(() => {
    }, [cart])

    const getQuantity = () => {
        return cart.reduce((acum, unItem) => acum+unItem.quantity, 0);
    }

    return(
        <CartContext.Provider value={{cart, addItem, getQuantity}}>
            {children}
        </CartContext.Provider>
    );

}

export default CartProvider;