import Cookies from "js-cookie";
import React, { createContext, useContext, useEffect, useState } from "react";
import { data_card_img } from "../utils/shopData";

const StoreContext = createContext([]);

export const useStoreContext = () => {
    return useContext(StoreContext);
};

const StoreProvider = ({ children }) => {
    const [products, setProducts] = useState(Cookies.get('products') ? JSON.parse(Cookies.get('products')) : []);
    const [item, setItem] = useState(Cookies.get('item') ? JSON.parse(Cookies.get('item')) : {});
    const [cartItems, setCartItems] = useState(Cookies.get('cartItems') ? JSON.parse(Cookies.get('cartItems')) : []);

    useEffect(() => {
        Cookies.set('products', JSON.stringify(data_card_img))
        Cookies.set('item', JSON.stringify(item))
        Cookies.set('cartItems', JSON.stringify(cartItems))

    }, [products, item, cartItems])

    const addItem = (item, quantity) => {
        let inCartList = cartItems.find(i => i.id === item.id);

        if (inCartList) {
            inCartList.quantity += quantity;
            setCartItems([...cartItems])
        } else {
            setCartItems([...cartItems, { ...item, quantity }]);
        }

    }
    // console.log(products)
    // console.log(item)
    // console.log(cartItems)




    const itemQuantity = () => {
        return cartItems.reduce((acum, item) => acum = acum + item.quantity, 0);
    }

    const cartTotalPrice = () => {
        return cartItems.reduce((acum, item) => (acum += item.price * item.quantity), 0);
    }

    const cartItemDelete = (id) => {
        return cartItems.filter(e => e.id !== id);
    }

    const cartDelete = () => {
        setCartItems([])
    }



    return (
        <StoreContext.Provider
            value={{ data_card_img, products, setProducts, item, setItem, addItem, itemQuantity, cartTotalPrice, cartItemDelete, cartDelete }}
        >
            {children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;
