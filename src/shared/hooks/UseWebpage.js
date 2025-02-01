import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    addWebpage,
    getWebpages,

} from "../../store/actions/webpage_action";
import _debounce from "lodash/debounce";


// Add Data
export const useCreateWebpage = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.webpage);
    const addData = async (data) => {
        await dispatch(addWebpage(data));
    };
    return [data, addData];
};

export const useGetWebpage = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.webpage);

    useEffect(() => {
        if (!data.webpages) {
            dispatch(getWebpages());
        }

    }, [])
    return [data];
};


