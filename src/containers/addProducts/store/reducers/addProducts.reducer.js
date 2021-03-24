import * as Actions from '../actions/addProducts.actions';

const initialState = {
    addProducts: "",
};

const addProducts = (state = initialState, action) => {
    switch (action.type) {
        case Actions.SET_ADD_PRODUCTS: {
            return {
                ...state,
                addProducts: action.addProducts
            };
        }
        default: {
            return state;
        }
    }
};

export default addProducts;
