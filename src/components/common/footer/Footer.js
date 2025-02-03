import React from 'react'
import { Link } from 'react-router-dom'
import { URI } from '../../../domain/constant';
import renderHTML from "react-render-html";
import { TiSocialYoutube } from "react-icons/ti";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div>
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
                <h5 className="widget-title">Address</h5>
                <div className="contact-content contact-content-address">
                  <p><strong>Head Office:</strong> 3995-399, Main Road Naya Bazar, Delhi-110006</p>

                  <p><strong>Email:</strong> <a href="mailto:figurenaturalpvtltdhr@gmail.com">figurenaturalpvtltdhr@gmail.com</a></p>

                  <p><strong>Phone:</strong> <a href="tel:+919212431435">+91-9212431435</a></p>



                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div id="footer-bottom">
        <div className="container-lg">
          <div className="row">
            <div className="col-md-12 mx-auto copyright text-align-center p-2">
              <p>Copyright © 2025-2026 -  <strong>Figure Natural Private Limited</strong> – Redefining healthy living, one grain at a time. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>

    </div >
  )
}

export default Footer