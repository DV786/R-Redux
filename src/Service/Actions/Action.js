import { ADD_TO_CART, REMOVE_TO_CART } from "../Constaint"

export const addToCart = (data) => {
    // console.log("data",data);
    return{
        type: ADD_TO_CART,
        data:data,
    }
}
export const removeToCart = (data) => {
    // console.log("action");
    return{
        type: REMOVE_TO_CART,
        
    }
}

