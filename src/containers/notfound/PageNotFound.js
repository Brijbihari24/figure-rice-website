import React from 'react'
import Header from '../../components/common/header/Header'
import Footer from '../../components/common/footer/Footer'

function PageNotFound() {
  return (
    <div>
      <Header />
      <section className="hidden-bar">
        <div className="inner-box text-center">
          <div className="cross-icon"><span className="fa fa-times" /></div>
          <div className="title">
            <h4>Get Appointment</h4>
          </div>
          {/*Appointment Form*/}
          <div className="appointment-form">
            <form method="post" action="contact.html">
              <div className="form-group">
                <input type="text" name="text" defaultValue placeholder="Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" defaultValue placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Message" rows={5} defaultValue={""} />
              </div>
              <div className="form-group">
                <button type="submit" className="theme-btn">Submit now</button>
              </div>
            </form>
          </div>
          {/*Social Icons*/}
          <div className="social-style-one">
            <a href="#"><i className="fab fa-twitter" /></a>
            <a href="#"><i className="fab fa-facebook-f" /></a>
            <a href="#"><i className="fab fa-instagram" /></a>
            <a href="#"><i className="fab fa-pinterest-p" /></a>
          </div>
        </div>
      </section>
      {/*End Hidden Sidebar */}
      {/* Error Section Start */}
      <section className="error-section pt-45 pb-150 rpb-100">
        <div className="container">
          <div className="error-inner text-center wow zoomIn delay-0-2s">
            <img src="assets/images/background/404-error.png" alt="404 Error" />
            <h2>OPPS! This Page Are Can’t Be Found</h2>
            <a href="index.html" className="theme-btn style-six">Goto Home <i className="fas fa-long-arrow-alt-right" /></a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default PageNotFound