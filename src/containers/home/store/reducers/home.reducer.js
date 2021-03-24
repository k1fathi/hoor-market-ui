import * as Actions from '../actions/home.actions';

const initialState = {
    message: "",
};

const home = (state = initialState, action) => {
    switch (action.type) {
        case Actions.SET_HOME: {
            return {
                ...state,
                message: action.message
            };
        }
        default: {
            return state;
        }
    }
};

export default home;
