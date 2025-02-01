import React from 'react'
import { Formik, Form } from "formik";
import { TextArea, TextInput, SelectBox } from "../../components/Form/Form";
import * as Yup from "yup";
import { useCreateAppointment } from "../../shared/hooks/UseAppointment";
import { useSelectAllService } from "../../shared/hooks/UseService"


function MakeAppointment() {
    const [data, addData] = useCreateAppointment();

    const [service_data] = useSelectAllService();
    const { all_services, all_services_loading } = service_data;

    console.log("All Services -", all_services);
    return (
        <div>
            <section className="booking-section-three rel z-1 bg-light-gray pt-140 rpt-90 pb-150 rpb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="booding-three-content rmb-55">
                                <div className="section-title mb-30">
                                    <span className="bg-text">Book</span>
                                    <span className="sub-title">Make Appointment</span>
                                    <h2>Still Have Questions?</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <Formik
                                initialValues={{
                                    name: "",
                                    email: "",
                                    phone: "",
                                    service: "",
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
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <TextInput
                                                            type="text"
                                                            id="name"
                                                            name="name"
                                                            className="form-control"
                                                            defaultValue placeholder="Full Name" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <TextInput
                                                            type="text"
                                                            id="email"
                                                            name="email"
                                                            className="form-control"
                                                            defaultValue placeholder="Email" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <TextInput
                                                            type="text"
                                                            id="phone"
                                                            name="phone"
                                                            className="form-control"
                                                            defaultValue placeholder="Phone" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
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
                <div className="booking-circle">
                    <img src="assets/images/shapes/service-circle.png" alt="Circle" />
                </div>
            </section >
        </div >
    )
}

export default MakeAppointment