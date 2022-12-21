import { useState } from "react";
const { createContext } = require("react"); // teine importimis võimalus

const CartSumContext = createContext(null);

export const CartSumContextProvider = (props) => {
    const [cartSum, setCartSum ] = useState(calculateCartSum());
    
    function calculateCartSum() {
        let cartLS = localStorage.getItem('cart');
        cartLS = JSON.parse(cartLS) || [];
        let cartSum = 0;
        cartLS.forEach(e => cartSum = cartSum + e.product.price * e.quantity);
        return cartSum.toFixed(2);
    };

    return(
        <CartSumContext.Provider value={{
            cartSum: cartSum,
            setCartSum: setCartSum
        }}>
            {props.children}
        </CartSumContext.Provider>
    )
};



export default CartSumContext;