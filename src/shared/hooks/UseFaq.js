import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    addFaq,
    getFaqs,
    getFaq,
    editFaq,
    deleteFaq,
    getAllFaqs,
    getFaqBySlug,
    getSimilarFaq
} from "../../store/actions/faq_action";
import _debounce from "lodash/debounce";
import { useSelectAllCategory } from "./UseCategory";

// Get All Data
export const useAllFaqs = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.faq);
    const [pageNumber, setPageNumber] = useState(1);
    const [deleteEntry, setDeleteEntry] = useState(null);

    useEffect(() => {
        if (deleteEntry) {
            dispatch(deleteFaq(deleteEntry));
        }
        allQuery();
    }, [deleteEntry, pageNumber, window.location.search]);
    const allQuery = useCallback(
        _debounce(() => {
            dispatch(getFaqs({}));
        }, 1000),
        []
    );

    const deleteBtnClicked = async (id) => {
        setDeleteEntry(id);
    };

    return [data, setPageNumber, deleteBtnClicked];
};

// Get Single Data
export const useSingleFaq = (id) => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.faq);
    useEffect(() => {
        dispatch(getFaq(id));
    }, [id]);
    return [data];
};

//single faq by slug
export const useSingleFaqBySlug = (id) => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.faq);
    useEffect(() => {
        dispatch(getFaqBySlug(id));
    }, [id]);
    return [data];
};

export const useSimilarFaqsByID = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.faq);
    const faqByID = async (id) => {
        dispatch(getSimilarFaq(id));
    }
    return [data, faqByID];
};

// Add Data
export const useCreateFaq = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.faq);
    const addData = async (data) => {
        await dispatch(addFaq(data));
    };
    return [data, addData];
};
export const useUpdateFaq = () => {
    const dispatch = useDispatch();
    // const data = useSelector((state) => state.faq);
    const updateData = async (id, data) => {
        await dispatch(editFaq(id, data));
    };
    return [updateData];
};

export const useSelectAllFaq = () => {
    const dispatch = useDispatch();
    const [term, setTerm] = useState("");
    const [value, setValue] = useState("");
    const data = useSelector((state) => state.faq);
    useEffect(() => {
        dispatch(getAllFaqs({ term, value }));
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
