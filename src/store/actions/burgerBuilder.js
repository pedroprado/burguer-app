export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';

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

export default {
    addIngredient,
    removeIngredient
}