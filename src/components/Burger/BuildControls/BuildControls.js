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
    </div>);
};


export default buildControls;