import React from 'react'
import Header from '../../components/common/header/Header'
import Footer from '../../components/common/footer/Footer'

function BookAppointment() {
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
            {/* Page Banner Start */}
            <section className="page-banner text-white py-165 rpy-130" style={{ backgroundImage: 'url(assets/images/banners/page-banner-three.jpg)' }}>
                <div className="container">
                    <div className="banner-inner text-center">
                        <span className="bg-text">booking</span>
                        <h1 className="page-title wow fadeInUp delay-0-2s">Make Appointment</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb wow fadeInUp delay-0-4s">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item active">Appointment</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>
            {/* Page Banner End */}
            {/* Offer Section Start */}
            <section className="offer-section text-center rel z-1 pt-140 rpt-90 pb-120 rpb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-9 col-md-10">
                            <div className="section-title mb-65">
                                <span className="bg-text">Offer</span>
                                <span className="sub-title">Who We Offer</span>
                                <h2>Quality &amp; Natural Spa Salon</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-2 col-lg-3 col-sm-4 col-6 col-small">
                            <a className="offer-item wow fadeInUp delay-0-2s" href="service-details.html">
                                <i className="flaticon-relax" />
                                <h5>Body Relax</h5>
                            </a>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-sm-4 col-6 col-small">
                            <a className="offer-item wow fadeInUp delay-0-4s" href="service-details.html">
                                <i className="flaticon-beauty" />
                                <h5>Facials</h5>
                            </a>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-sm-4 col-6 col-small">
                            <a className="offer-item wow fadeInUp delay-0-6s" href="service-details.html">
                                <i className="flaticon-massage" />
                                <h5>Massages</h5>
                            </a>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-sm-4 col-6 col-small">
                            <a className="offer-item wow fadeInUp delay-0-8s" href="service-details.html">
                                <i className="flaticon-cbd-oil" />
                                <h5>Oil Therapy</h5>
                            </a>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-sm-4 col-6 col-small">
                            <a className="offer-item wow fadeInUp delay-1-0s" href="service-details.html">
                                <i className="flaticon-spa-1" />
                                <h5>Sauna</h5>
                            </a>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-sm-4 col-6 col-small">
                            <a className="offer-item wow fadeInUp delay-1-2s" href="service-details.html">
                                <i className="flaticon-hair-removal" />
                                <h5>Cosmetology</h5>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* Offer Section End */}
            {/* Booking Hours Section Start */}
            <section className="booking-hours-area bg-light-gray rel z-1">
                <div className="booking-hour-image" style={{ backgroundImage: 'url(assets/images/booking/booking-page.jpg)' }} />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-6">
                            <div className="booking-hours-content py-150 rpt-0 rpb-100 wow fadeInLeft delay-0-2s">
                                <div className="section-title mb-30">
                                    <span className="bg-text">menus</span>
                                    <span className="sub-title">Hair Salon</span>
                                    <h2>Working Hours</h2>
                                </div>
                                <p>Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium totam aperiame eaque quae abillo inventore veritatis</p>
                                <ul className="booking-hours py-20 wow fadeInRight delay-0-2s">
                                    <li><span className="date">Mon to Friday</span> <span className="symbol">:</span> <span className="time">7:30 am — 1:00 am</span></li>
                                    <li><span className="date">Satuaday</span> <span className="symbol">:</span> <span className="time">7:30 am — 1:00 am</span></li>
                                    <li><span className="date">Wednesday</span> <span className="symbol">:</span> <span className="time">7:30 am — 1:00 am</span></li>
                                </ul>
                                <a href="booking.html" className="theme-btn style-two">booking now <i className="fas fa-long-arrow-alt-right" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="booking-circle">
                    <img src="assets/images/shapes/booking-circle.png" alt="Circle" />
                </div>
                <div className="booking-bg-icon">
                    <i className="flaticon-hair-iron" />
                </div>
            </section>
            {/* Booking Hours Section End */}
            {/* Booking Section Start */}
            <section className="booking-section pt-140 rpt-90 pb-150 rpb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="section-title text-center mb-45">
                                <span className="bg-text">Booking</span>
                                <span className="sub-title">Booking Seat</span>
                                <h2>Make Appointment</h2>
                            </div>
                        </div>
                    </div>
                    <form action="#" className="booking-from">
                        <div className="row clearfix">
                            <div className="col-lg-4 col-sm-6">
                                <div className="form-group wow fadeInUp delay-0-2s">
                                    <label htmlFor="name"><i className="far fa-user" /></label>
                                    <input type="text" id="name" name="name" className="form-control" defaultValue placeholder="Full Name" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="form-group wow fadeInUp delay-0-3s">
                                    <label htmlFor="number"><i className="fas fa-phone" /></label>
                                    <input type="text" id="number" name="number" className="form-control" defaultValue placeholder="Phone Number" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="form-group wow fadeInUp delay-0-4s">
                                    <label htmlFor="email"><i className="far fa-envelope" /></label>
                                    <input type="email" id="email" name="email" className="form-control" defaultValue placeholder="Email Address" required />
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 mb-30">
                                <div className="form-group z-2 wow fadeInUp delay-0-5s">
                                    <select name="services" id="services">
                                        <option value="services">Services</option>
                                        <option value="service1">Hair Cutting</option>
                                        <option value="service2">Foot Massage</option>
                                        <option value="service3">Nail Colors</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="form-group wow fadeInUp delay-0-6s">
                                    <input type="date" id="date" name="date" className="form-control" defaultValue required />
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="form-group wow fadeInUp delay-0-7s">
                                    <input type="time" id="time" name="time" className="form-control" defaultValue required />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group mb-0 wow fadeInUp delay-0-8s">
                                    <button type="submit" className="theme-btn w-100 style-six">Make appointment <i className="fas fa-long-arrow-alt-right" /></button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default BookAppointment