import React, { createContext } from 'react'
import all_product from '../Components/Assets/all_product'

// createContext is a function in React that is used to create a Context object. A context provides a way to pass data through the component tree without having to pass props down manually at every level. This can be particularly useful for global state management, theming, or any other scenario where data needs to be accessible across many components.

export const ShopContext= createContext(null);

const ShopContextProvider= (props) =>{
    const contextValue= {all_product};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;