export const SET_HOME = 'Set Home Message';

export function setHomeMessage(value) {

    return (dispatch) =>
        dispatch({
            type   : SET_HOME,
            message: value,
        });
}
