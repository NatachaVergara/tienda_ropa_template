import Cookies from "js-cookie";
import React, { createContext, useContext, useEffect, useState } from "react";
import { data_card_img } from "../utils/shopData";

const StoreContext = createContext([]);

export const useStoreContext = () => {
    return useContext(StoreContext);
};

const StoreProvider = ({ children }) => {
    const [products, setProducts] = useState(localStorage.getItem('productsItems') ? JSON.parse(localStorage.getItem('productsItems')) : []);
    const [item, setItem] = useState(Cookies.get('item') ? JSON.parse(Cookies.get('item')) : {});
    const [cartItems, setCartItems] = useState(Cookies.get('cartItems') ? JSON.parse(Cookies.get('cartItems')) : []);
    const [favoritos, setFavoritos] = useState(Cookies.get('favoritos') ? JSON.parse(Cookies.get('favoritos')) : []);
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        setProducts(data_card_img)
    }, [])

    useEffect(() => {
        localStorage.setItem('productsItems', JSON.stringify(products));
        Cookies.set('item', JSON.stringify(item));
        Cookies.set('cartItems', JSON.stringify(cartItems));
        Cookies.set('favoritos', JSON.stringify(favoritos));

    }, [products, item, cartItems, favoritos])

    const addItem = (item, quantity) => {
        let inCartList = cartItems.find(i => i.id === item.id);
        console.log(inCartList)
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


    const addFavoritos = (item) => {
        let inFavoritos = favoritos.find(f => f.id === item.id);
        console.log(favoritos)

        if (inFavoritos) {
            alert('Este item ya se encuentra en favoritos');
            setFavoritos([...favoritos]);
        }
        else {
            alert('Agregado');
            setFavoritos([...favoritos, item]);

        }
    }

    const deleteFavorito = (id) => {
        let newFavList = favoritos.filter(f => f.id !== id);
        setFavoritos(newFavList)
    }
    const deleteFavoritos = () => {
        setFavoritos([])
    }




    return (
        <StoreContext.Provider
            value={{ products, setProducts, item, setItem, addItem, itemQuantity, cartTotalPrice, cartItemDelete, cartDelete, favoritos, addFavoritos, deleteFavorito, deleteFavoritos, isLogged, setIsLogged }}
        >
            {children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;
