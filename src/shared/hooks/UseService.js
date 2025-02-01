import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    addService,
    getServices,
    getService,
    editService,
    getServiceBySlug,
    deleteService,
    getAllServices,
    getSimilarService,
} from "../../store/actions/service_action";
import _debounce from "lodash/debounce";
import { useSelectAllCategory } from "./UseCategory";

// Get All Data
export const useAllServices = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.service);
    const [pageNumber, setPageNumber] = useState(1);
    const [deleteEntry, setDeleteEntry] = useState(null);

    useEffect(() => {
        if (deleteEntry) {
            dispatch(deleteService(deleteEntry));
        }
        allQuery();
    }, [deleteEntry, pageNumber, window.location.search]);
    const allQuery = useCallback(
        _debounce(() => {
            dispatch(getServices({}));
        }, 1000),
        []
    );

    const deleteBtnClicked = async (id) => {
        setDeleteEntry(id);
    };

    return [data, setPageNumber, deleteBtnClicked];
};

// Get Single Data
export const useSingleService = (id) => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.service);
    useEffect(() => {
        dispatch(getService(id));
    }, [id]);
    return [data];
};

//single product by slug
export const useSingleServiceBySlug = (id) => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.service);
    useEffect(() => {
        dispatch(getServiceBySlug(id));
    }, [id]);
    return [data];
};

export const useSimilarServicesByID = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.service);
    const serviceByID = async (id) => {
        dispatch(getSimilarService(id));
    }
    return [data, serviceByID];
};

// Add Data
export const useCreateService = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.service);
    const addData = async (data) => {
        await dispatch(addService(data));
    };
    return [data, addData];
};
export const useUpdateService = () => {
    const dispatch = useDispatch();
    // const data = useSelector((state) => state.service);
    const updateData = async (id, data) => {
        await dispatch(editService(id, data));
    };
    return [updateData];
};

export const useSelectAllService = () => {
    const dispatch = useDispatch();
    const [term, setTerm] = useState("");
    const [value, setValue] = useState("");
    const data = useSelector((state) => state.service);
    useEffect(() => {
        dispatch(getAllServices({ term, value }));
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
