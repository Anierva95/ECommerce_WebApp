import React, {createContext, useReducer, useContext } from "react";

const StoreContext = createContext();
const { Provider } = StoreContext;

// const reducer = (state, action) => {
//     console.log(`reducer state`, state);
//     console.log(`reducer state`, action);

//     switch (action.type) {
//         case "GET_PRODUCTS":
//             return {
//                 ...state
//             }
//     }
// }