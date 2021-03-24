import * as Actions from '../actions/index';

const initialState = {
    layout : {
        isNavBarOpen: true,
        loading: false,
        message: null
    }
};

const settingsReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.OPEN_NAVBAR:
        {
            return {
                ...state,
                layout: {
                    ...state.layout,
                    isNavBarOpen: true
                }
            };
        }
        case Actions.CLOSE_NAVBAR:
        {
            return {
                ...state,
                layout: {
                    ...state.layout,
                    isNavBarOpen: false
                }
            };
        }
        case Actions.SET_LOADING:
        {
            return {
                ...state,
                layout: {
                    ...state.layout,
                    loading: action.payload.loading
                }
            };
        }
        case Actions.SET_MESSAGE:
        {
            return {
                ...state,
                layout: {
                    ...state.layout,
                    message: action.payload
                }
            };
        }
        default:
        {
            return state;
        }
    }
};

export default settingsReducer;
