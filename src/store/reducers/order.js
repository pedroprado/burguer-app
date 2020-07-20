import order, * as actionTypes from '../actions/order';

const initialState = {
    orders:[],
    loading: false
}

const reducer = (state = initialState, action) =>{

    switch (action.type){
        case actionTypes.PURCHASE_BURGER_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder = { id: action.orderId, order: action.orderData};
            const orders = [...state.orders];
            orders.push(newOrder);
            return {
                ...state,
                orders: orders,
                loading: false
            }
        case actionTypes.PURCHASE_BURGER_FAIL:
            return{
                ...state,
                loading:false
            }
        default:
            return state;
    }
}

export default reducer;