import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < 300 + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [all_product, setAll_Product] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/product/allproduct')
            .then((response) => {
                setAll_Product(response.data);
            })
            .catch((error) => {
                console.error('Error fetching the data', error);
            });

        const token = localStorage.getItem('auth-token');
        if (token) {
            fetchCartItems(token);
        }
    }, []);

    const fetchCartItems = (token) => {
        axios.post(
            'http://localhost:3000/cart/getcart',
            {},
            {
                headers: {
                    Accept: 'application/json',
                    'auth-token': token,
                    'Content-Type': 'application/json',
                },
            }
        )
        .then((response) => {
            setCartItems(response.data);
        })
        .catch((error) => {
            console.error('Error fetching cart items:', error);
        });
    };

    const addToCart = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev, [itemId]: (prev[itemId] || 0) + 1 };
            return updatedCart;
        });

        const token = localStorage.getItem('auth-token');
        if (token) {
            axios.post(
                'http://localhost:3000/cart/addtocart',
                { itemID: itemId },
                {
                    headers: {
                        Accept: 'application/json',
                        'auth-token': token,
                        'Content-Type': 'application/json',
                    },
                }
            )
            .then((response) => {
                console.log(response.data);
                // Optionally update cart items here based on response
            })
            .catch((error) => {
                console.error('Error adding to cart:', error);
            });
        }
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    };

    const contextValue = { all_product, cartItems, addToCart, getTotalCartAmount, getTotalCartItems };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
