import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    addAppointment,
    getAppointments,
    getAppointment,
    editAppointment,
    deleteAppointment,
    getAllAppointments,
} from "../../store/actions/appointment_action";
import _debounce from "lodash/debounce";
import { useSelectAllCategory } from "./UseCategory";

// Get All Data
export const useAllAppointments = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.appointment);
    const [pageNumber, setPageNumber] = useState(1);
    const [deleteEntry, setDeleteEntry] = useState(null);

    useEffect(() => {
        if (deleteEntry) {
            dispatch(deleteAppointment(deleteEntry));
        }
        allQuery();
    }, [deleteEntry, pageNumber, window.location.search]);
    const allQuery = useCallback(
        _debounce(() => {
            dispatch(getAppointments({}));
        }, 1000),
        []
    );

    const deleteBtnClicked = async (id) => {
        setDeleteEntry(id);
    };

    return [data, setPageNumber, deleteBtnClicked];
};

// Get Single Data
export const useSingleAppointment = (id) => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.appointment);
    useEffect(() => {
        dispatch(getAppointment(id));
    }, [id]);
    return [data];
};
// Add Data
export const useCreateAppointment = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.appointment);
    const addData = async (data) => {
        await dispatch(addAppointment(data));
    };
    return [data, addData];
};
export const useUpdateAppointment = () => {
    const dispatch = useDispatch();
    // const data = useSelector((state) => state.appointment);
    const updateData = async (id, data) => {
        await dispatch(editAppointment(id, data));
    };
    return [updateData];
};

export const useSelectAllAppointment = () => {
    const dispatch = useDispatch();
    const [term, setTerm] = useState("");
    const [value, setValue] = useState("");
    const data = useSelector((state) => state.appointment);
    useEffect(() => {
        dispatch(getAllAppointments({ term, value }));
    }, [term, value]);
    return [data, setTerm, setValue];
};

export const useGetDropdownOptions = () => {
    const [category, setBCategorySearchField, setCategorySearchValue] =
        useSelectAllCategory();

    const [dropdownOptions, setDropdownOptions] = useState({});
    useEffect(() => {
        if (category && category.all_categorys) {
            const newData = category.all_categorys.map((item) => {
                return { label: item.name, value: item._id };
            });
            setDropdownOptions({ ...dropdownOptions, category: newData });
        }
    }, [category]);
    const loadOptions = async (inputValue, callback, field) => {
        // if (field == "parent_category") {
        //   await setCategorySearchField("name");
        //   await setCategorySearchValue(inputValue);
        //   callback(dropdownOptions.parent_category);
        // }
    };

    return [dropdownOptions, loadOptions];
};
