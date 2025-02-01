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
    GET_ALL_APPOINTMENTS_ENDED
} from "../types/appointment_type";

const initialState = {
    appointments_loading: true,
    appointments: null,
    page: null,
    pages: null,
    total_appointments: 0,

    appointment: null,
    appointment_loading: null,

    loading: true,

    appointment_message: null,
    all_appointments: null,
    all_appointments_loading: null,
    add_appointment_loading: true,
    edit_appointment_loading: true
};

export const appointment_reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_APPOINTMENTS_STATED:
            return {
                ...state,
                appointments: null,
                pages: null,
                page: null,
                total_appointments: 0,
                appointments_loading: true
            };
        case GET_APPOINTMENTS:
            return {
                ...state,
                appointments: payload.appointments,
                pages: payload.pages,
                page: payload.page,
                total_appointments: payload.count
            };
        case GET_APPOINTMENTS_ENDED:
            return {
                ...state,
                appointments_loading: false
            };
        case GET_ALL_APPOINTMENTS_STATED:
            return {
                ...state,
                all_appointments_loading: true,
                all_appointments: null
            };
        case GET_ALL_APPOINTMENTS:
            return {
                ...state,
                all_appointments: payload
            };
        case GET_ALL_APPOINTMENTS_ENDED:
            return {
                ...state,
                all_appointments_loading: false
            };

        case ADD_APPOINTMENT_STATED:
            return {
                ...state,
                appointment_message: null,
                add_appointment_loading: true
            };
        case ADD_APPOINTMENT:
            return {
                ...state,
                appointment_message: payload
            };
        case ADD_APPOINTMENT_ENDED:
            return {
                ...state,
                add_appointment_loading: false
            };
        case GET_APPOINTMENT_STATED:
            return {
                ...state,
                appointment: null,
                appointment_loading: true
            };
        case GET_APPOINTMENT:
            return {
                ...state,
                appointment: payload
            };
        case GET_APPOINTMENT_ENDED:
            return {
                ...state,
                appointment_loading: false
            };
        case EDIT_APPOINTMENT_STATED:
            return {
                ...state,
                appointment_message: null,
                edit_appointment_loading: true
            };
        case EDIT_APPOINTMENT:
            return {
                ...state,
                appointment_message: payload
            };
        case EDIT_APPOINTMENT_ENDED:
            return {
                ...state,
                edit_appointment_loading: false
            };

        default:
            return state;
    }
};
