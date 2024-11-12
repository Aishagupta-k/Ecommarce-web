import { createContext, useState, useEffect } from "react";

export const cartcontext = createContext();

// Create a provider context
export const CartProvider = ({ children }) => {
    // Initialize state with data from localStorage or an empty array
    const [cartitems, setcartitem] = useState(() => {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Save cart items to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartitems));
    }, [cartitems]);

    // Function to add an item to the cart
    const addtocart = (product) => {
        setcartitem((previtem) => [...previtem, product]);
    };

    // Function to remove an item from the cart
    const removeItem = (itemToRemove) => {
        setcartitem((prevItems) => prevItems.filter(item => item.id !== itemToRemove.id));
    };

    return (
        <cartcontext.Provider value={{ cartitems, addtocart, removeItem }}>
            {children}
        </cartcontext.Provider>
    );
};
