import {
    SET_PRODUCTS,
    UPDATE_CART,
    UPDATE_LOCAL_CART,
    UPLOAD_PRODUCTS,
    REMOVE_FROM_LOCAL_CART,
    UPDATE_TOTAL,
    LOWER_LOCAL_CART,
    SET_LOADING,
    END_LOADING
} from './types'

const initialState = {
    productData: [],
    cart: [],
    itemsTotal: 0,
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_PRODUCTS:

            return {
                ...state,
                productData: action.payload
            }
        case UPLOAD_PRODUCTS:
            return {
                ...state
            }
        case UPDATE_CART:
            return {
                ...state,
                cart: action.payload
            }
        case UPDATE_LOCAL_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case REMOVE_FROM_LOCAL_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.index !== action.payload)
            }
        case UPDATE_TOTAL:
            return {
                ...state,
                itemsTotal: state.cart.reduce((acc, cur) => {
                    return acc + cur.price
                }, 0)
            }
        case LOWER_LOCAL_CART:

            let arrayIndex = state.cart.lastIndexOf(state.cart.find(item => item.index === action.payload))
            console.log(arrayIndex)
            return {
                ...state,
                cart: [...state.cart.slice(0, arrayIndex), ...state.cart.slice(arrayIndex + 1)]
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case END_LOADING:
            return {
                ...state,
                loading: false
            }

        default:
            return state;
    }
}




