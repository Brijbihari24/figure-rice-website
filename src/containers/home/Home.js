import React from "react";
import Header from "../../components/common/header/Header";
import Banner from "../../components/banner/Banner"
import HomeAbout from "../../components/home_about/HomeAbout";
import OurRange from "../../components/range/OurRange";
import Story from "../../components/story/Story";
import Shweta from "../../components/shweta/Shweta"
import Category from "../../components/category/Category";
import Dillipasand from "../../components/dilli/Dillipasand";
import ContactForm from "../contact/ContactForm";
import { Formik, Form } from "formik";
import { TextArea, TextInput, SelectBox } from "../../components/Form/Form";
import * as Yup from "yup";
import Testimonial from "../../components/testimonial/Testimonial";
import Features from "../../components/features/Features";
import Blog from "../../components/blog/Blog";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialYoutube } from "react-icons/ti";
import { RiInstagramFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import InstagramPost from "../../components/InstagramEmbed/InstagramPost";

function Home() {

  return (
    <div>
      <Header />
      <Banner />
      <HomeAbout />
      <OurRange />
      <Shweta />
      <InstagramPost />
      <Category />
      <Features />
      <Blog />
      <Story />
      <Dillipasand />
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
      <Testimonial />
      <section className="tags-sec ptb-60 tpy-4">
        <div className="container-lg">
          <h2 className="my-4">People are also looking for</h2>
          <a href="#" className="btn btn-warning me-2 mb-2">Basmati Rice</a>
          <a href="#" className="btn btn-warning me-2 mb-2">Premium Basmati Rice</a>
          <a href="#" className="btn btn-warning me-2 mb-2">Rice</a>
          <a href="#" className="btn btn-warning me-2 mb-2">Cholesterol-Free Rice</a>
          <a href="#" className="btn btn-warning me-2 mb-2">Low-GI Rice</a>
          <a href="#" className="btn btn-warning me-2 mb-2">Organic Rice</a>
          <a href="#" className="btn btn-warning me-2 mb-2">Daily Rice</a>
          <a href="#" className="btn btn-warning me-2 mb-2">Biryani Rice</a>
          <a href="#" className="btn btn-warning me-2 mb-2">Brown Rice</a>
          <a href="#" className="btn btn-warning me-2 mb-2">Blue diamon rice</a>

        </div>
      </section>
      <footer className="ptb-60 bg-offwhite">
        <div className="container-lg">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-menu">
                <img src="/assets/images/logo.png" width={120} alt="logo" />
                <div className="social-links mt-3">
                  <ul className="d-flex list-unstyled gap-2">
                    <li>
                      <a href="#" className="btn btn-outline-light">
                        <FaFacebookSquare className="social-icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="btn btn-outline-light">
                        <RiInstagramFill className="social-icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="btn btn-outline-light">
                        <FaTwitter className="social-icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="btn btn-outline-light">
                        <TiSocialYoutube className="social-icon" />
                      </a>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-6">
              <div className="footer-menu">
                <h5 className="widget-title">Organic</h5>
                <ul className="menu-list list-unstyled">
                  <li className="menu-item">
                    <a href="#" className="nav-link">About us</a>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="nav-link">Conditions </a>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="nav-link">Our Journals</a>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="nav-link">Careers</a>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="nav-link">Affiliate Programme</a>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="nav-link">Ultras Press</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-sm-6">
              <div className="footer-menu">
                <h5 className="widget-title">Quick Links</h5>
                <ul className="menu-list list-unstyled">
                  <li className="menu-item">
                    <a href="#" className="nav-link">Offers</a>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="nav-link">Discount Coupons</a>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="nav-link">Stores</a>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="nav-link">Track Order</a>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="nav-link">Shop</a>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="nav-link">Info</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-sm-6">
              <div className="footer-menu">
                <h5 className="widget-title">Customer Service</h5>
                <ul className="menu-list list-unstyled">
                  <li className="menu-item">
                    <a href="#" className="nav-link">FAQ</a>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="nav-link">Contact</a>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="nav-link">Privacy Policy</a>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="nav-link">Returns &amp; Refunds</a>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="nav-link">Cookie Guidelines</a>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="nav-link">Delivery Information</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-menu">
                <h5 className="widget-title">Subscribe Us</h5>
                <p>Subscribe to our newsletter to get updates about our grand offers.</p>
                <form className="d-flex mt-3 gap-0" action="index.html">
                  <input className="form-control rounded-start rounded-0 bg-light" type="email" placeholder="Email Address" aria-label="Email Address" />
                  <button className="btn btn-dark rounded-end rounded-0" type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div id="footer-bottom">
        <div className="container-lg">
          <div className="row">
            <div className="col-md-6 mx-auto copyright text-align-center p-2">
              <p>Copyright © 2025-2026 - Figure Rice. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Home;
