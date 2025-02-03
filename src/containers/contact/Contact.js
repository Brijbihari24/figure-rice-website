import React from 'react'
import Header from '../../components/common/header/Header'
import Footer from '../../components/common/footer/Footer'
import ContactForm from './ContactForm'
import { Formik, Form } from "formik";
import { TextArea, TextInput, SelectBox } from "../../components/Form/Form";
import * as Yup from "yup";
import Features from '../../components/features/Features';

function Contact() {



  return (
    <div>
      <Header />
      <div className="contact-sec ptb-60 bg-offwhite">
        <div className="container">
          <div className="row align-item-center">
            <div className="col-md-6">
              <div className="contact-form-wrap banner-form-top" style={{ background: "#fff" }}>
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
            <div className="col-md-6">
              <div className="contact-content contact-content-address">
                <p><strong>Head Office:</strong> 3995-399, Main Road Naya Bazar, Delhi-110006</p>

                <p><strong>Manufacturing Facility Address:</strong> KH NO.572, VILLAGE - KOTLI P.O.SUCHAN, NH-09, SIRSA, Haryana</p>

                <p><strong>Email:</strong> <a href="mailto:figurenaturalpvtltdhr@gmail.com">figurenaturalpvtltdhr@gmail.com</a></p>

                <p><strong>Phone:</strong> <a href="tel:+919212431435">+91-9212431435</a></p>

                <p><strong>Figure Natural Private Limited</strong> – Redefining healthy living, one grain at a time.</p>

              </div>
            </div>
          </div>
        </div>
      </div>
      <Features />
      <section className="map ptb-60">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="address-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2514.9262154934286!2d77.21637887374757!3d28.528352888807174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce18ac60e4a61%3A0x81c366c7998e72a3!2sNexus%20Select%20CityWalk!5e1!3m2!1sen!2sin!4v1738590756265!5m2!1sen!2sin" style={{ border: 0, width: '100%', height: "70vh" }} allowFullScreen loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Contact