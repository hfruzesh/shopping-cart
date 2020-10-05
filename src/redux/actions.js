import {
    SET_PRODUCTS,
    UPLOAD_PRODUCTS,
    UPDATE_CART,
    UPDATE_LOCAL_CART,
    REMOVE_FROM_LOCAL_CART,
    UPDATE_TOTAL,
    SET_LOADING,
    END_LOADING,
    LOWER_LOCAL_CART
} from './types';

import axios from 'axios'
import { storeProducts } from '../data.js'

export const createProductList = () => dispatch => {
    dispatch({
        type: SET_LOADING
    })
    axios
        .get('/getPhoneData')
        .then(res => {
            // console.log(res.data)
            dispatch({
                type: SET_PRODUCTS,
                payload: res.data
            });
        })
        .catch((err) => {
            console.log(err);
        })
}

export const updateData = productData => dispatch => {
    dispatch({
        type: UPLOAD_PRODUCTS,
        payload: productData
    })
    console.log('turn on post request')
    storeProducts.forEach(item => {
        console.log(item)
        // axios
        //     .post('/createPhoneData', {
        //         index: (item.id - 1),
        //         company: item.company,
        //         title: item.title,
        //         img: item.img,
        //         price: item.price,
        //         info: item.info
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })

    })
}

export const addToCart = item => dispatch => {
    dispatch({
        type: SET_LOADING
    })
    axios
        .post('/addToCart', {
            itemId: item.itemId,
            index: item.index,
            company: item.company,
            title: item.title,
            img: item.img,
            price: item.price,
            info: item.info
        })
        .then(() => {
            dispatch({
                type: UPDATE_LOCAL_CART,
                payload: item
            })
        }).then(() => {
            dispatch({
                type: UPDATE_TOTAL
            })
        })
        .then(() => {
            dispatch({
                type: END_LOADING
            })
        })
        .catch(err => {
            console.log(err)
        })

}

export const removeFromCart = (index) => dispatch => {
    dispatch({
        type: SET_LOADING
    })
    axios
        .post('/removeFromCart', {
            index: index
        })
        .then(() => {
            dispatch({
                type: REMOVE_FROM_LOCAL_CART,
                payload: index
            })
        }).then(() => {
            dispatch({
                type: UPDATE_TOTAL
            })
        })
        .then(() => {
            dispatch({
                type: END_LOADING
            })
        })
        .catch(err => console.log(err));


}

export const lowerCartQuantity = (index) => dispatch => {
    dispatch({
        type: SET_LOADING
    })
    axios
        .post('/lowerQuantity', {
            index: index
        })
        .then(() => {
            dispatch({
                type: LOWER_LOCAL_CART,
                payload: index
            })
        }).then(() => {
            dispatch({
                type: UPDATE_TOTAL,
                payload: index
            })
        })
        .then(() => {
            dispatch({
                type: END_LOADING
            })
        })
        .catch(err => console.log(err));


}

export const updateCartItems = () => dispatch => {
    dispatch({
        type: SET_LOADING
    })
    axios.get('/getCart')
        .then(res => {
            console.log(res.data)
            dispatch({
                type: UPDATE_CART,
                payload: res.data
            })
        }).then(() => {
            dispatch({
                type: UPDATE_TOTAL
            })
        })
        .then(() => {
            dispatch({
                type: END_LOADING
            })
        })
        .catch(err => console.log(err))
}
