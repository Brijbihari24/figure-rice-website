import {
    GET_FAQS_STATED,
    GET_FAQS,
    GET_FAQS_ENDED,
    ADD_FAQ_STATED,
    ADD_FAQ,
    ADD_FAQ_ENDED,
    EDIT_FAQ_STATED,
    EDIT_FAQ,
    EDIT_FAQ_ENDED,
    GET_FAQ_STATED,
    GET_FAQ,
    GET_FAQ_ENDED,
    GET_ALL_FAQS_STATED,
    GET_ALL_FAQS,
    GET_ALL_FAQS_ENDED,
    GET_SIMILAR_FAQ_STATED,
    GET_SIMILAR_FAQ,
    GET_SIMILAR_FAQ_ENDED
} from "../types/faq_type";

const initialState = {
    faqs_loading: true,
    faqs: null,
    page: null,
    pages: null,
    total_faqs: 0,

    faq: null,
    faq_loading: null,

    similar_services: null,
    similar_services_loading: true,

    loading: true,

    faq_message: null,
    all_faqs: null,
    all_faqs_loading: null,
    add_faq_loading: true,
    edit_faq_loading: true
};

export const faq_reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_FAQS_STATED:
            return {
                ...state,
                faqs: null,
                pages: null,
                page: null,
                total_faqs: 0,
                faqs_loading: true
            };
        case GET_FAQS:
            return {
                ...state,
                faqs: payload.faqs,
                pages: payload.pages,
                page: payload.page,
                total_faqs: payload.count
            };
        case GET_FAQS_ENDED:
            return {
                ...state,
                faqs_loading: false
            };
        case GET_SIMILAR_FAQ_STATED:
            return {
                ...state,
                similar_faqs: null,
                similar_faqs_loading: true
            };
        case GET_SIMILAR_FAQ:
            return {
                ...state,
                similar_faqs: payload
            };
        case GET_SIMILAR_FAQ_ENDED:
            return {
                ...state,
                similar_faqs_loading: false
            };
        case GET_ALL_FAQS_STATED:
            return {
                ...state,
                all_faqs_loading: true,
                all_faqs: null
            };
        case GET_ALL_FAQS:
            return {
                ...state,
                all_faqs: payload
            };
        case GET_ALL_FAQS_ENDED:
            return {
                ...state,
                all_faqs_loading: false
            };

        case ADD_FAQ_STATED:
            return {
                ...state,
                faq_message: null,
                add_faq_loading: true
            };
        case ADD_FAQ:
            return {
                ...state,
                faq_message: payload
            };
        case ADD_FAQ_ENDED:
            return {
                ...state,
                add_faq_loading: false
            };
        case GET_FAQ_STATED:
            return {
                ...state,
                faq: null,
                faq_loading: true
            };
        case GET_FAQ:
            return {
                ...state,
                faq: payload
            };
        case GET_FAQ_ENDED:
            return {
                ...state,
                faq_loading: false
            };
        case EDIT_FAQ_STATED:
            return {
                ...state,
                faq_message: null,
                edit_faq_loading: true
            };
        case EDIT_FAQ:
            return {
                ...state,
                faq_message: payload
            };
        case EDIT_FAQ_ENDED:
            return {
                ...state,
                edit_faq_loading: false
            };

        default:
            return state;
    }
};
