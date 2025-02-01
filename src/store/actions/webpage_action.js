import api from "../../domain/api";
import {
    GET_WEBPAGES_STATED,
    GET_WEBPAGES,
    GET_WEBPAGES_ENDED,
} from "../types/webpage_type";
import * as qs from "qs";
import { handleError } from "../../shared/handleError";
import { setAlert } from "./alert";

export const addWebpage = (formData) => async (dispatch, getState) => {
    try {
        dispatch({
            type: GET_WEBPAGES_STATED,
        });
        const { data } = await api.post(`/webpages`, formData);
        dispatch({
            type: GET_WEBPAGES,
            payload: data,
        });
        dispatch({
            type: GET_WEBPAGES_ENDED,
        });
    } catch (error) {
        dispatch({
            type: GET_WEBPAGES_ENDED,
        });
        dispatch(handleErrorLocal(error));
        dispatch(handleError(error));
    }
};
export const getWebpages =
    () =>
        async (dispatch) => {
            try {
                dispatch({
                    type: GET_WEBPAGES_STATED,
                });


                const { data } = await api.get(`/webpages`);

                dispatch({
                    type: GET_WEBPAGES,
                    payload: data,
                });
                dispatch({
                    type: GET_WEBPAGES_ENDED,
                });
            } catch (error) {
                dispatch({
                    type: GET_WEBPAGES_ENDED,
                });
                dispatch(handleErrorLocal(error));
                dispatch(handleError(error));
            }
        };

export const handleErrorLocal = () => async (dispatch) => { };
