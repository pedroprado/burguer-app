import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import actions from '../../store/actions/order';
import { connect } from 'react-redux';

class Orders extends Component {


    componentDidMount() {
        this.props.fetchOrders();
    }

    render () {
        let output = <Spinner />;
        if(!this.props.loading){
            output = <div>
                {this.props.orders.map(order => (
                <Order 
                    key={order.id}
                    ingredients={order.ingredients}
                    price={order.price} />
                ))}
            </div>
        }

        return (
            <div>
               {output}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchOrders: () => dispatch(actions.fetchOrders())
    }    
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));