import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3
};

class BurguerBuilder extends Component{

    constructor(props){
        super(props)
        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 4
        };
    }


    addIngredientHandler = (ingredient_type) => {

        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[ingredient_type] = updatedIngredients[ingredient_type] + 1;

        const priceAddition = INGREDIENT_PRICES[ingredient_type];

        const oldPrice = this.state.totalPrice;
        this.setState({totalPrice: oldPrice + priceAddition, ingredients : updatedIngredients}); 
    };

    removeIngredientHandler = (ingredient_type) => {

        const oldCount = this.state.ingredients[ingredient_type];
        if(oldCount > 0){
            const updatedIngredients = {...this.state.ingredients};
            updatedIngredients[ingredient_type] = updatedIngredients[ingredient_type] - 1;

            const priceAddition = INGREDIENT_PRICES[ingredient_type];

            const oldPrice = this.state.totalPrice;
            this.setState({totalPrice: oldPrice - priceAddition, ingredients : updatedIngredients}); 
        }
    };

    getIngredientsDisabledInfo = () => {
        const ingredients = {...this.state.ingredients };
        for(let ingredient in ingredients){
            if( ingredients[ingredient] <= 0 ){
                ingredients[ingredient] = true;
            }else{
                ingredients[ingredient] = false;
            }
        }
        return ingredients;
    }

    render(){
        const disabledInfo = this.getIngredientsDisabledInfo();

        return(
        <Aux>
            <Burger ingredients = {this.state.ingredients}/>
            <BuildControls 
                addIngredient = {this.addIngredientHandler}
                removeIngredient = {this.removeIngredientHandler}
                disabledInfo = {disabledInfo}
                price = {this.state.totalPrice}
            />
        </Aux>);
    };
}

export default BurguerBuilder;