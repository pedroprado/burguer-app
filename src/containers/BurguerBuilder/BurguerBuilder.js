import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurguerBuilder extends Component{

    render(){
        return(
        <Aux>
            <Burger/>
        </Aux>);
    };
}

export default BurguerBuilder;