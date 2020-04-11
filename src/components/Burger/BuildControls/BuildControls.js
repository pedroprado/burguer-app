import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type:'salad'},
    { label: 'Bacon', type:'bacon'},
    { label: 'Cheese', type:'cheese'},
    { label: 'Meat', type:'meat'},

];

const buildControls = (props) => {


    return (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map( control => {
            return (
                <BuildControl
                    addIngredient={() => props.addIngredient(control.type)}
                    removeIngredient={() => props.removeIngredient(control.type)}
                    key={control.label} 
                    label={control.label}
                    isDisabled = {props.disabledInfo[control.type]}
                />
            );
        })}
        <button
            disabled= {!props.purchasable}
            className = {classes.OrderButton}
            onClick={props.purchasingHandler}
        >ORDER NOW!</button>
    </div>);
};


export default buildControls;