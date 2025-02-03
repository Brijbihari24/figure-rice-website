import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookAppointmentButton from "../BookAppointmentButton";
import { TiSocialYoutube } from "react-icons/ti";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Header({ match }) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location.href]);

  const [header, setHeader] = useState("main-header header-two text-white");

  const listenScrollEvent = event => {
    if (window.scrollY < 73) {
      return setHeader("main-header header-two text-white");
    } else if (window.scrollY > 70) {
      return setHeader("main-header header-two text-white fixed-header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);



  const [openModel, setOpenModel] = useState(false)

  return (
    <div>

      <header>
        <div className="container">
          <div className="row py-3 border-bottom align-item-centre">
            <div className="col-sm-3 col-lg-2 text-center text-sm-start d-flex gap-3 justify-content-center justify-content-md-start">
              <div className="d-flex align-items-center my-3 my-sm-0">
                <a href="index.html">
                  <img width={100} src="/assets/images/logo.png" alt="logo" className="img-fluid" />
                </a>
              </div>
            </div>
            <div className="col-md-7">
              <div className="header-nav">
                <nav className="header-nav-item">
                  <a href="">Home</a>
                  <a href="">Shop</a>
                  <a href="">AboutUs</a>
                  <a href="">Testimonials</a>
                  <a href="">Blogs</a>
                  <a href="">Media</a>
                  <a href="">ContactUs</a>
                </nav>
              </div>
            </div>

            <dic className="col-md-2">
              <div className="header-social-media">
                <div className="social-links mt-3">
                  <ul className="d-flex list-unstyled gap-2">
                    <li>
                      <a href="#" className="btn">
                        <FaFacebookSquare className="social-icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="btn">
                        <RiInstagramFill className="social-icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="btn">
                        <FaTwitter className="social-icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="btn">
                        <TiSocialYoutube className="social-icon" />
                      </a>
                    </li>

                  </ul>
                </div>
              </div>
            </dic>
          </div>
        </div>
      </header>
      <div className="form-back-drop" />
    </div>
  );
}

export default Header;




