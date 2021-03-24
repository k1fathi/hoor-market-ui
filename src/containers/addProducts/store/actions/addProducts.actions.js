export const SET_ADD_PRODUCTS = 'Set Add Products';

export function setAddProducts(value) {

    return (dispatch) =>
        dispatch({
            type   : SET_ADD_PRODUCTS,
            addProducts: value,
        });
}
