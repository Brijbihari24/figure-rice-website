import React from "react";
import { Link } from "react-router-dom";

import Breadcrum from "../../components/breadcrum/Breadcrum";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/Header";

function ThankYou({}) {
  return (
    <div>
      <Header />
      <div className="page-content">
        <Breadcrum title={"Thank You"} />
        <section className="section-padding">
          <div className="container">
            <div className="row g-4">
              <div className="col-12 col-xl-12">
                <h3 className="fw-bold">Thank You</h3>
                <img src="/assets/img/extra/thankyou.png" />
                <h3>Hurray! You’ve Successfully Done It!</h3>
                <strong>
                  <h4>Thank you for ordering from us!</h4>
                </strong>
                <p>
                  You’ll receive your first email within the next 24 hours. We
                  hope our product will meet your expectations. Let us know if
                  you have any questions.
                </p>
                <div className="contact-us mt-5 mb-5 text-center">
                  <Link className="theme-btn-sm-2" to="/my-account">
                    View Order
                  </Link>
                </div>
              </div>
            </div>
            {/*end row*/}
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default ThankYou;
