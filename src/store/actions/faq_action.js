import api from "../../domain/api";
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
    GET_SIMILAR_FAQ,
    GET_SIMILAR_FAQ_STATED,
    GET_SIMILAR_FAQ_ENDED,
} from "../types/faq_type";
import * as qs from "qs";
import { handleError } from "../../shared/handleError";
import { setAlert } from "./alert";

export const addFaq = (formData) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ADD_FAQ_STATED,
        });
        const { data } = await api.post(`/faqs`, formData);
        dispatch({
            type: ADD_FAQ,
            payload: data,
        });
        dispatch({
            type: ADD_FAQ_ENDED,
        });
    } catch (error) {
        dispatch({
            type: ADD_FAQ_ENDED,
        });
        dispatch(handleErrorLocal(error));
        dispatch(handleError(error));
    }
};
export const getFaqs =
    ({ pageNumber = "" }) =>
        async (dispatch) => {
            try {
                dispatch({
                    type: GET_FAQS_STATED,
                });
                const queryParams = qs.parse(window.location.search.replace("?", ""));
                const query = qs.stringify(queryParams, {
                    encodeValuesOnly: true, // prettify url
                });

                const { data } = await api.get(`/faqs?&${query}`);

                dispatch({
                    type: GET_FAQS,
                    payload: data,
                });
                dispatch({
                    type: GET_FAQS_ENDED,
                });
            } catch (error) {
                dispatch({
                    type: GET_FAQS_ENDED,
                });
                dispatch(handleErrorLocal(error));
                dispatch(handleError(error));
            }
        };
export const getFaq = (id) => async (dispatch) => {
    try {
        dispatch({
            type: GET_FAQ_STATED,
        });
        const { data } = await api.get(`/faqs/${id}`);

        dispatch({
            type: GET_FAQ,
            payload: data,
        });
        dispatch({
            type: GET_FAQ_ENDED,
        });
    } catch (error) {
        dispatch({
            type: GET_FAQ_STATED,
        });
        dispatch(handleErrorLocal(error));
        dispatch(handleError(error));
    }
};
export const editFaq = (id, formData) => async (dispatch) => {
    try {
        dispatch({
            type: EDIT_FAQ_STATED,
        });
        const { data } = await api.put(`/faqs/${id}`, formData);
        dispatch({
            type: EDIT_FAQ,
            payload: data,
        });
        dispatch({
            type: EDIT_FAQ_ENDED,
        });
    } catch (error) {
        dispatch({
            type: EDIT_FAQ_ENDED,
        });
        dispatch(handleErrorLocal(error));
        dispatch(handleError(error));
    }
};

export const getFaqBySlug = (id) => async (dispatch) => {
    try {
        dispatch({
            type: GET_FAQ_STATED,
        });
        const { data } = await api.get(`/faqs/slug/${id}`);

        dispatch({
            type: GET_FAQ,
            payload: data,
        });
        dispatch({
            type: GET_FAQ_ENDED,
        });
    } catch (error) {
        dispatch({
            type: GET_FAQ_STATED,
        });
        dispatch(handleErrorLocal(error));
        dispatch(handleError(error));
    }
};

export const getSimilarFaq = (id) => async (dispatch) => {
    try {
        dispatch({
            type: GET_SIMILAR_FAQ_STATED,
        });
        const { data } = await api.get(`/faqs/similar/${id}`);

        dispatch({
            type: GET_SIMILAR_FAQ,
            payload: data,
        });
        dispatch({
            type: GET_SIMILAR_FAQ_ENDED,
        });
    } catch (error) {
        dispatch({
            type: GET_SIMILAR_FAQ_ENDED,
        });
        dispatch(handleErrorLocal(error));
        dispatch(handleError(error));
    }
};

export const deleteFaq = (id) => async (dispatch) => {
    try {
        const { data } = await api.delete(`/faqs/${id}`);
        dispatch(setAlert("Faq Deleted Successfully", "success"));
    } catch (error) {
        dispatch(handleErrorLocal(error));
        dispatch(handleError(error));
    }
};
export const getAllFaqs =
    ({ term, value }) =>
        async (dispatch) => {
            try {
                dispatch({
                    type: GET_ALL_FAQS_STATED,
                });
                const { data } = await api.get(`/faqs/all?term=${term}&value=${value}`);

                dispatch({
                    type: GET_ALL_FAQS,
                    payload: data,
                });
                dispatch({
                    type: GET_ALL_FAQS_ENDED,
                });
            } catch (error) {
                dispatch({
                    type: GET_ALL_FAQS_ENDED,
                });
                dispatch(handleErrorLocal(error));
                dispatch(handleError(error));
            }
        };

export const handleErrorLocal = () => async (dispatch) => { };
