export const SET_ADD_SINGLE_PRODUCT = 'Set Add Single Product';

export function setAddSingleProduct(value) {

    return (dispatch) =>
        dispatch({
            type   : SET_ADD_SINGLE_PRODUCT,
            addSingleProduct: value,
        });
}
