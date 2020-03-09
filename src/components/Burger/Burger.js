import React from 'react';
import PropTypes from 'prop-types';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    const transformedIngredients = Object.keys(props.ingredients)
    .map( ingredient => {
        return [...Array(props.ingredients[ingredient])].map( (_, i) => {
           return <BurgerIngredient key={ingredient + i}  type={ingredient}/>
        });
    });

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            { transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

burger.propTypes ={

}

export default burger;