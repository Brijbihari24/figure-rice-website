import React, { useState } from 'react'
import { Formik, Form } from "formik";
import { TextArea, TextInput, SelectBox } from "../../components/Form/Form";
import * as Yup from "yup";
import { useCreateAppointment } from "../../shared/hooks/UseAppointment";
import { useSelectAllService } from "../../shared/hooks/UseService"

function DetailPageBookAppointment() {

    const [data, addData] = useCreateAppointment();

    const [service_data] = useSelectAllService();
    const { all_services, all_services_loading } = service_data;

    console.log("All Services -", all_services);

    const [openModel, setOpenModel] = useState(false)
    const [showGreeting, setSetshowGreeting] = useState(false)

    return (
        <div>
            <div className="widget form-widget wow fadeInUp delay-0-2s">
                <h5 className="widget-title">Make Appointment</h5>

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
                                message: "",
                            }}
                            validationSchema={Yup.object({
                                name: Yup.string().required("Required"),
                                email: Yup.string().required("Required"),
                                phone: Yup.string().required("Required"),
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
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <SelectBox
                                                        name="service"
                                                        className="form-control"
                                                        defaultValue placeholder="Select Service ">
                                                        <option option="">Select Service</option>
                                                        {
                                                            all_services && all_services.map((item) => {
                                                                return (
                                                                    <>
                                                                        <option value={item.name}> {item.name}  </option>
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                    </SelectBox>
                                                </div>
                                            </div>
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
    )
}

export default DetailPageBookAppointment