import * as Actions from '../actions/addSingleProduct.actions';

const initialState = {
    addSingleProduct: "",
};

const addSingleProduct = (state = initialState, action) => {
    switch (action.type) {
        case Actions.SET_ADD_SINGLE_PRODUCT: {
            return {
                ...state,
                addSingleProduct: action.addSingleProduct
            };
        }
        default: {
            return state;
        }
    }
};

export default addSingleProduct;
