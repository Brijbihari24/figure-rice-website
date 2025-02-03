import React from 'react'
import { Formik, Form } from "formik";
import { TextArea, TextInput, SelectBox } from "../../components/Form/Form";
import * as Yup from "yup";

function Contactus() {
    return (
        <>
            <div className="contactus-sec ptb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="contact-form-wrap banner-form-top">
                                <div className="section-title mb-45 text-center">
                                    <h1>Contact Us</h1>
                                </div>
                                <Formik
                                    initialValues={{
                                        name: "",
                                        email: "",
                                        phone: "",
                                        message: "",
                                    }}
                                    validationSchema={Yup.object({
                                        name: Yup.string().required("Required"),
                                        email: Yup.string().required("Required"),
                                        phone: Yup.string().required("Required"),
                                        message: Yup.string().required("Required"),
                                    })}
                                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                                        setSubmitting(true);
                                        // addData(values);
                                        // addContact({ values });
                                        resetForm();
                                        setSubmitting(false);
                                    }}
                                >
                                    {(formik) => {
                                        console.log(formik);
                                        return (
                                            <Form className="booking-from">
                                                <div className="row clearfix">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <TextInput
                                                                type="text"
                                                                id="name"
                                                                name="name"
                                                                className="form-control"
                                                                defaultValue placeholder="Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <TextInput
                                                                type="text"
                                                                id="email"
                                                                name="email"
                                                                className="form-control"
                                                                defaultValue placeholder="Email" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <TextInput
                                                                type="text"
                                                                id="phone"
                                                                name="phone"
                                                                className="form-control"
                                                                defaultValue placeholder="Phone" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12">
                                                        <div className="form-group">
                                                            <TextArea
                                                                type="text"
                                                                id="message"
                                                                name="message"
                                                                className="form-control"
                                                                defaultValue placeholder="Message"
                                                                col={12}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-body">
                                                    <div className="my-3 border-bottom" />
                                                    <div className="text-align-center">
                                                        <button
                                                            type="submit"
                                                            className="submit-btn"
                                                        >
                                                            Send Message
                                                            <i className="fas fa-long-arrow-alt-right" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </Form>
                                        );
                                    }}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contactus