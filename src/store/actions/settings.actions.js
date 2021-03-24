export const OPEN_NAVBAR = "open navbar";
export const CLOSE_NAVBAR = "close navbar";
export const SET_LOADING = "set loading";
export const SET_MESSAGE = "set message";

export function openNavBar() {
    return {
        type: OPEN_NAVBAR
    }
}

export function closeNavBar() {
    return {
        type: CLOSE_NAVBAR
    }
}

export function setLoading(loading) {
    return {
        type: SET_LOADING,
        payload: {
            loading
        }
    }
}

export function setMessage(text, type) {
    return {
        type: SET_MESSAGE,
        payload: {
            text,
            type
        }
    }
}