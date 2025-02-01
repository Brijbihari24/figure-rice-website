import React from 'react'
import DetailPageBookAppointment from '../../containers/collections/DetailPageBookAppointment'
import { useState } from 'react'
import { Form, Formik } from 'formik'
import { SelectBox, TextArea, TextInput } from '../Form/Form'
import { useCreateAppointment } from "../../shared/hooks/UseAppointment";
import { useSelectAllService } from "../../shared/hooks/UseService"
import * as Yup from "yup"

function BookAppointmentButton({ openModel, setOpenModel }) {
    // const [openModel, setOpenModel] = useState(false)

    const [data, addData] = useCreateAppointment();

    const [service_data] = useSelectAllService();
    const { all_services, all_services_loading } = service_data;

    const [showGreeting, setSetshowGreeting] = useState(false)

    return (
        <div>
            {
                //     <div className>
                //     <a onClick={() => setOpenModel(true)} className="btn btn-book">Book An Appointment</a>
                // </div>
            }

            <div className='appointment-modal-wrapper' style={{ display: openModel ? "block" : "none" }}>
                <div className='appointment-modal'>

                    {
                        showGreeting ? (
                            <>
                                <div className="modal-close-icon thankyou-modal-close">
                                    <i onClick={() => setOpenModel(false)} class="fa fa-times" aria-hidden="true"></i>
                                </div>
                                <div className="success-message-box">

                                    <div className="success-message">
                                        <h4>Thankyou!</h4>
                                        <p>Thankyou for Successfuly filling the form. Our Team will contact you regarding the same</p>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <Formik
                                initialValues={{
                                    name: "",
                                    email: "",
                                    phone: "",
                                    service: "",
                                    message: "",
                                }}
                                validationSchema={Yup.object({
                                    name: Yup.string().required("Required"),
                                    email: Yup.string().required("Required"),
                                    phone: Yup.string().required("Required"),
                                    service: Yup.string().required("Required"),
                                })}
                                onSubmit={async (values, { setSubmitting, resetForm }) => {
                                    setSubmitting(true);
                                    addData(values);
                                    resetForm();
                                    setSubmitting(false);
                                }}
                            >
                                {(formik) => {
                                    console.log(formik);
                                    return (
                                        <Form className="booking-from">
                                            <div className="modal-heading">
                                                <div className="modal-content-title">
                                                    <p>Book An Appointment</p>
                                                </div>
                                                <div className="modal-close-icon">
                                                    <i onClick={() => setOpenModel(false)} class="fa fa-times" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                            <div className="row clearfix">
                                                <div className="col-sm-12">
                                                    <div className="form-group">
                                                        <TextInput
                                                            type="text"
                                                            id="name"
                                                            name="name"
                                                            className="form-control p-10"
                                                            defaultValue placeholder="Full Name"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-12">
                                                    <div className="form-group">
                                                        <TextInput
                                                            type="text"
                                                            id="email"
                                                            name="email"
                                                            className="form-control p-10"
                                                            defaultValue placeholder="Email" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-12">
                                                    <div className="form-group">
                                                        <TextInput
                                                            type="text"
                                                            id="phone"
                                                            name="phone"
                                                            className="form-control p-10"
                                                            defaultValue placeholder="Phone" />
                                                    </div>
                                                </div>

                                                <div className="col-sm-12">
                                                    <div className="form-group">
                                                        <TextArea
                                                            type="text"
                                                            id="message"
                                                            name="message"
                                                            className="form-control p-10"
                                                            defaultValue placeholder="Message" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-body">
                                                <div className="my-3 border-bottom" />
                                                <div className="mb-0">
                                                    <button
                                                        onClick={() => setSetshowGreeting(!showGreeting)}
                                                        type="submit"
                                                        className="theme-btn w-100 style-three"
                                                    >
                                                        Make Appointment
                                                        <i className="fas fa-long-arrow-alt-right" />
                                                    </button>
                                                </div>
                                            </div>
                                        </Form>
                                    );
                                }}
                            </Formik>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default BookAppointmentButton