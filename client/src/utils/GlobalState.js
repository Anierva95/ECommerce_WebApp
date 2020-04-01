import React, { createContext, useReducer, useContext } from "react";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
    console.log(`reducer state`, state);
    console.log(`reducer state`, action);

    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...state,
                products: [...action.products]
            }
        case "SET_CURRENT_PRODUCT":
            return {
                ...state,
                currentProduct: action.product
            }
    }
}

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        products: [],
        currentProduct: {
            _id: 0,
            Item: "",
            Price: 0
        },
        shoppingCart: [],
        wishList: [],
        blostPosts: [],
        currentUser: {
            title: "",
            body: "",
            author: ""
        },
    });

    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
