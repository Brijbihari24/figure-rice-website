import {
    GET_WEBPAGES_STATED,
    GET_WEBPAGES,
    GET_WEBPAGES_ENDED,

} from "../types/webpage_type";

const initialState = {
    webpages: null,
    loading: true,


};

export const webpage_reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_WEBPAGES_STATED:
            return {
                ...state,

                loading: true
            };
        case GET_WEBPAGES:
            return {
                ...state,
                webpages: payload,

            };
        case GET_WEBPAGES_ENDED:
            return {
                ...state,
                loading: false
            };


        default:
            return state;
    }
};
