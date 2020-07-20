import axios from '../../axios-orders';

export const PURCHASE_BURGER_START = 'PURCHASE_BURGER_START';
export const PURCHASE_BURGER_SUCCESS = 'PURCHASE_BURGER_SUCCESS';
export const PURCHASE_BURGER_FAIL = 'PURCHASE_BURGER_FAIL';

export const FETCH_ORDERS_START = 'FETCH_ORDERS_START';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_FAIL = 'FETCH_ORDERS_FAIL';


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

const fetchOrders = () => {
    return dispatch => {

        dispatch(fetchOrdersStart())
        axios.get('/orders.json')
            .then(res => {
                console.log(res)
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                dispatch(fetchOrdersSuccess(fetchedOrders));
            })
            .catch(err => {
                dispatch(fetchOrdersFail());
            });
    }
}

const fetchOrdersStart = () => {
    return {
        type: FETCH_ORDERS_START
    }
}

const fetchOrdersSuccess = (orders) => {
    return {
        type: FETCH_ORDERS_SUCCESS,
        orders: orders
    }
}
const fetchOrdersFail = (error) => {
    return {
        type: FETCH_ORDERS_FAIL,
        error: error
    }
}

export default {
    purchaseBurgerConfirmed,
    fetchOrders
}