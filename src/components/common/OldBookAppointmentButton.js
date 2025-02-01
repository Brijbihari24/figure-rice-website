import React from 'react'
import DetailPageBookAppointment from '../../containers/collections/DetailPageBookAppointment'
import { useState } from 'react'
import { Form, Formik } from 'formik'
import { SelectBox, TextArea, TextInput } from '../Form/Form'
import { useCreateAppointment } from "../../shared/hooks/UseAppointment";
import { useSelectAllService } from "../../shared/hooks/UseService"
import * as Yup from "yup"

function BookAppointmentButton() {
    const [openModel, setOpenModel] = useState(false)

    const [data, addData] = useCreateAppointment();

    const [service_data] = useSelectAllService();
    const { all_services, all_services_loading } = service_data;
    return (
        <div>
            <div className>
                <a onClick={() => setOpenModel(true)} className="btn btn-book">Book An Appointment</a>
            </div>
            <div className='appointment-modal-wrapper' style={{ display: openModel ? "block" : "none" }}>
                <div className='appointment-modal'>
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
                                    <div className="row clearfix">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <TextInput
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    className="form-control"
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
                                                    className="form-control"
                                                    defaultValue placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <TextInput
                                                    type="text"
                                                    id="phone"
                                                    name="phone"
                                                    className="form-control"
                                                    defaultValue placeholder="Phone" />
                                            </div>
                                        </div>
                                        {
                                            //     <div className="col-sm-12">
                                            //     <div className="form-group">
                                            //         <SelectBox
                                            //             name="service"
                                            //             className="form-control"
                                            //             defaultValue placeholder="Select Service ">
                                            //             <option option="">Select Service</option>
                                            //             {
                                            //                 all_services && all_services.map((item) => {
                                            //                     return (
                                            //                         <>
                                            //                             <option value={item.name}> {item.name}  </option>
                                            //                         </>
                                            //                     )
                                            //                 })
                                            //             }
                                            //         </SelectBox>
                                            //     </div>
                                            // </div>
                                        }
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <TextArea
                                                    type="text"
                                                    id="message"
                                                    name="message"
                                                    className="form-control"
                                                    defaultValue placeholder="Message" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-body">
                                        <div className="my-3 border-bottom" />
                                        <div className="mb-0">
                                            <button
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
                </div>
            </div>
        </div>
    )
}

export default BookAppointmentButton