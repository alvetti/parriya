import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        let itemQuantity = { ...item, quantity };
        if (!isInCart(item.id)) {
            setCart([...cart, itemQuantity]);
        } else {
            const newProducts = cart.map(prod => {
                if(prod.id === item.id) {
                    const newProduct = {
                        ...prod,
                        quantity: prod.quantity + quantity
                    };
                    return newProduct;
                } else {
                    return prod;
                }
            });
            setCart(newProducts);
        }
    };

    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    const clear = () =>{
        setCart([]);
    };

    const isInCart = (id) => {
        return cart.some((e) => e.id === id);
    }

    const getQuantity = () => {
        let cant = 0;
        cart.forEach((e) => cant += e.quantity);
        return cant;
    };

    const getTotal = () => {
        let total = 0;
        cart.forEach((e) => total += (e.quantity*e.price));
        return total;
    };

    const openCart = () => {
        let sidebar = document.getElementById('sidebar');
        let bodyWrapper = document.getElementById('root');

        sidebar.classList.toggle('open');
        bodyWrapper.classList.toggle('cartopen');
    }

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart, getTotal, getQuantity, openCart}}>
            {children}
        </CartContext.Provider>
    );

}

export default CartProvider;