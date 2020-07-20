import axios from '../../axios-orders';

export const PURCHASE_BURGER_START = 'PURCHASE_BURGER_START';
export const PURCHASE_BURGER_SUCCESS = 'PURCHASE_BURGER_SUCCESS';
export const PURCHASE_BURGER_FAIL = 'PURCHASE_BURGER_FAIL';


const purchaseBurgerConfirmed = (order) =>{

    return dispatch => {
        dispatch(purchaseBurgerStart());

        axios.post( '/orders.json', order )
        .then( response => {
            dispatch(purchaseBurgerSuccess(response.data.name, order))
        } )
        .catch( error => {
            dispatch(purchaseBurgerFail(error))
        } );
    }
}


const purchaseBurgerStart = () =>{
    return {
        type: PURCHASE_BURGER_START
    }
}

const purchaseBurgerSuccess = (orderId, orderData) =>{
    return {
        type: PURCHASE_BURGER_SUCCESS,
        orderId: orderId,
        orderData: orderData
    }
}

const purchaseBurgerFail = (error) =>{
    return{
        type: PURCHASE_BURGER_FAIL,
        error: error
    }
}

export default {
    purchaseBurgerConfirmed
}