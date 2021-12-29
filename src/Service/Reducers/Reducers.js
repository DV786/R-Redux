/* eslint-disable no-unreachable */
import { ADD_TO_CART } from "../Constaint"

const initialState = {
        cartData:[]
}

export default function cartItems(state=initialState, action){

    switch(action.type){
        case ADD_TO_CART:
            console.log("reducer",action);
            return {
                ...state,
                cartData:action.data
            }
            break;
            default:
                return state
    }
  
}