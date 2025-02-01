import api from "../../domain/api";
import {
    GET_APPOINTMENTS_STATED,
    GET_APPOINTMENTS,
    GET_APPOINTMENTS_ENDED,
    ADD_APPOINTMENT_STATED,
    ADD_APPOINTMENT,
    ADD_APPOINTMENT_ENDED,
    EDIT_APPOINTMENT_STATED,
    EDIT_APPOINTMENT,
    EDIT_APPOINTMENT_ENDED,
    GET_APPOINTMENT_STATED,
    GET_APPOINTMENT,
    GET_APPOINTMENT_ENDED,
    GET_ALL_APPOINTMENTS_STATED,
    GET_ALL_APPOINTMENTS,
    GET_ALL_APPOINTMENTS_ENDED,
} from "../types/appointment_type";
import * as qs from "qs";
import { handleError } from "../../shared/handleError";
import { setAlert } from "./alert";

export const addAppointment = (formData) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ADD_APPOINTMENT_STATED,
        });
        const { data } = await api.post(`/appointments`, formData);
        dispatch({
            type: ADD_APPOINTMENT,
            payload: data,
        });
        dispatch({
            type: ADD_APPOINTMENT_ENDED,
        });
    } catch (error) {
        dispatch({
            type: ADD_APPOINTMENT_ENDED,
        });
        dispatch(handleErrorLocal(error));
        dispatch(handleError(error));
    }
};
export const getAppointments =
    ({ pageNumber = "" }) =>
        async (dispatch) => {
            try {
                dispatch({
                    type: GET_APPOINTMENTS_STATED,
                });
                const queryParams = qs.parse(window.location.search.replace("?", ""));
                const query = qs.stringify(queryParams, {
                    encodeValuesOnly: true, // prettify url
                });

                const { data } = await api.get(`/appointments?&${query}`);

                dispatch({
                    type: GET_APPOINTMENTS,
                    payload: data,
                });
                dispatch({
                    type: GET_APPOINTMENTS_ENDED,
                });
            } catch (error) {
                dispatch({
                    type: GET_APPOINTMENTS_ENDED,
                });
                dispatch(handleErrorLocal(error));
                dispatch(handleError(error));
            }
        };
export const getAppointment = (id) => async (dispatch) => {
    try {
        dispatch({
            type: GET_APPOINTMENT_STATED,
        });
        const { data } = await api.get(`/appointments/${id}`);

        dispatch({
            type: GET_APPOINTMENT,
            payload: data,
        });
        dispatch({
            type: GET_APPOINTMENT_ENDED,
        });
    } catch (error) {
        dispatch({
            type: GET_APPOINTMENT_STATED,
        });
        dispatch(handleErrorLocal(error));
        dispatch(handleError(error));
    }
};
export const editAppointment = (id, formData) => async (dispatch) => {
    try {
        dispatch({
            type: EDIT_APPOINTMENT_STATED,
        });
        const { data } = await api.put(`/appointments/${id}`, formData);
        dispatch({
            type: EDIT_APPOINTMENT,
            payload: data,
        });
        dispatch({
            type: EDIT_APPOINTMENT_ENDED,
        });
    } catch (error) {
        dispatch({
            type: EDIT_APPOINTMENT_ENDED,
        });
        dispatch(handleErrorLocal(error));
        dispatch(handleError(error));
    }
};
export const deleteAppointment = (id) => async (dispatch) => {
    try {
        const { data } = await api.delete(`/appointments/${id}`);
        dispatch(setAlert("Appointment Deleted Successfully", "success"));
    } catch (error) {
        dispatch(handleErrorLocal(error));
        dispatch(handleError(error));
    }
};
export const getAllAppointments =
    ({ term, value }) =>
        async (dispatch) => {
            try {
                dispatch({
                    type: GET_ALL_APPOINTMENTS_STATED,
                });
                const { data } = await api.get(`/appointments/all?term=${term}&value=${value}`);

                dispatch({
                    type: GET_ALL_APPOINTMENTS,
                    payload: data,
                });
                dispatch({
                    type: GET_ALL_APPOINTMENTS_ENDED,
                });
            } catch (error) {
                dispatch({
                    type: GET_ALL_APPOINTMENTS_ENDED,
                });
                dispatch(handleErrorLocal(error));
                dispatch(handleError(error));
            }
        };

export const handleErrorLocal = () => async (dispatch) => { };
