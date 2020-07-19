import axios from '../../axios-orders';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
export const SET_INGREDIENTS = 'SET_INGREDIENTS';
export const FETCH_INGREDIENTS_FAILED = 'FETCH_INGREDIENTS_FAILED';


const addIngredient = (name) =>{
    return {
        type: ADD_INGREDIENT,
        igName: name
    }
}

const removeIngredient = (name) => {
    return {
        type: REMOVE_INGREDIENT,
        igName: name
    }
}

const fecthIngredients = () =>{
    return dispatch =>{
        axios.get( '/ingredients.json' )
        .then( response => {
            dispatch(setIngredients(response.data))
        } )
        .catch( error => {
            dispatch(fecthIngredientsFailed())
        } );
    };
}

const setIngredients = (ingredients) => {
    return {
        type: SET_INGREDIENTS,
        ingredients: ingredients
    }
}

const fecthIngredientsFailed = () =>{
    return {
        type: FETCH_INGREDIENTS_FAILED
    }
}

export default {
    addIngredient,
    removeIngredient,
    fecthIngredients
}