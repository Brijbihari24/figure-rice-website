import React, { useState } from 'react'
import { useField } from 'formik'
import { URI } from '../../domain/constant'
import api from "../../domain/api";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export const SelectBox = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className="form-group">
      <label htmlFor={props.id || props.name}>{label}</label>
      <select
        id={props.name}
        className="form-control custom-select"
        {...field}
        {...props}
      />
      {meta.error ? <div className="text-danger err">{meta.error}</div> : null}
    </div>
  )
}

export const TextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props)
  return (
    <div className="form-group">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input id={props.name} className="form-control" {...field} {...props} />
      {meta.error ? <div className="text-danger err">{meta.error}</div> : null}
    </div>
  )
}

export const TextInputHorizontal = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props)
  return (
    <div className="form-group">
      <div className="col-md-2">
        <label htmlFor={props.id || props.name}>{label}</label>
      </div>
      <div className="col-md-10">
        <input className="form-control" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="text-danger">{meta.error}</div>
        ) : null}
      </div>
    </div>
  )
}

export const TextArea = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props)
  return (
    <div className="form-group">
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea
        id={props.name}
        className="form-control"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-danger">{meta.error}</div>
      ) : null}
    </div>
  )
}
export const RadioButton = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props)
  return (
    <>
      <input type="radio" className="form-check-input" {...field} {...props} />
      <label htmlFor={props.id || props.name}>{label}</label>
      {meta.touched && meta.error ? (
        <div className="text-danger">{meta.error}</div>
      ) : null}
    </>
  )
}

export const CheckBox = ({ children, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField({ ...props, type: 'checkbox' })
  return (
    <div className="form-group">
      <div className="pt-3">
        <label className="checkbox">
          <input type="checkbox" {...field} {...props} />
          {'  '} {children}
        </label>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    </div>
  )
}

export const FileUpload = ({ title, item, formik, col, edit, value }) => {
  const [loading, setLoading] = useState(false);
  const uploadImage = async (image) => {
    try {
      setLoading(true);
      const newForm = new FormData();
      newForm.append(`image`, image, image.name);
      const { data } = await api.post(`/upload/`, newForm);
      // console.log(data);
      formik.setFieldValue(item, data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="col-md-6">
      <label> {title} </label>
      <br />
      {!loading ? (
        <>
          {value ? (
            <div>
              <img
                src={`${URI}${value}`}
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
              <a
                className="btn btn-sm btn-danger"
                onClick={() => formik.setFieldValue(item, null)}
              >
                {" "}
                <i className="fa fa-trash"></i>{" "}
              </a>
            </div>
          ) : (
            <input
              type="file"
              className="form-control-file"
              onChange={(e) => uploadImage(e.target.files[0])}
            />
          )}
        </>
      ) : (
        <div>
          <Skeleton height={10} />
        </div>
      )}
    </div>
  );
};
