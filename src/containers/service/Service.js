import React, { useState, useEffect } from 'react'
import Header from '../../components/common/header/Header'
import Footer from '../../components/common/footer/Footer'
import Breadcrum from '../../components/breadcrum/Breadcrum'
import ServiceCard from './ServiceCard'
import BodyTreatmentCard from './BodyTreatmentCard'
import { useSelectAllService } from "../../shared/hooks/UseService"
import { Link } from 'react-router-dom'
import { URI } from '../../domain/constant';
import CountUp from 'react-countup';



function Service() {

    const [service_data] = useSelectAllService();
    const { all_services, all_services_loading } = service_data;

    console.log("All Services -", all_services);

    return (
        <div>
            <Header />
            <section className="page-banner text-white py-165 rpy-130" style={{ backgroundImage: 'url(/assets/images/banner_image.jpg)' }}>
                <div className="container">
                    <div className="banner-inner text-center">
                        <span className="bg-text">Services</span>
                        <h2 className="page-title wow fadeInUp delay-0-2s">Services</h2>
                        {
                            //   <nav aria-label="breadcrumb">
                            //   <ol className="breadcrumb wow fadeInUp delay-0-4s">
                            //     <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            //     <li className="breadcrumb-item active">{title}</li>
                            //   </ol>
                            // </nav>
                        }
                    </div>
                </div>
            </section>
            <section className="services-page pt-140 rpt-90 pb-90 rpb-40">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="section-title text-center mb-65">
                                <img className="bg-image" src="assets/images/shapes/service-bg.png" alt="Leaf" />
                                <span className="sub-title">What We Offer</span>
                                <h3>We believe everyone deserves to feel confident and beautiful in their skin, and we're here to help you achieve that.</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {all_services && all_services.map((item) => {
                            return (
                                <div className="col-lg-4 col-sm-6">
                                    <Link to={`/service/${item.slug}`}>
                                        <ServiceCard
                                            name={item.name}
                                            image={`${URI}${item.image}`}
                                        />
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            {/* Services Section End */}
            {/* Counter Section Start */}
            <div className="counter-section text-white bg-yellow pt-60 pb-30">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="counter-item wow fadeInUp delay-0-2s">
                                <CountUp
                                    style={{ fontSize: "36px", fontWeight: "bold" }}
                                    start={0}
                                    end={6203}
                                    duration={10}
                                />
                                <p>Project Complete</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="counter-item wow fadeInUp delay-0-4s">
                                <CountUp
                                    style={{ fontSize: "36px", fontWeight: "bold" }}
                                    start={0}
                                    end={456}
                                    duration={10}
                                />
                                <p>Expert Members</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="counter-item wow fadeInUp delay-0-6s">
                                <CountUp
                                    style={{ fontSize: "36px", fontWeight: "bold" }}
                                    start={0}
                                    end={35}
                                    duration={10}
                                />
                                <p>Years Experience</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="counter-item wow fadeInUp delay-0-8s">
                                <CountUp
                                    style={{ fontSize: "36px", fontWeight: "bold" }}
                                    start={0}
                                    end={7563}
                                    duration={10}
                                />
                                <p>Satisfied Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Counter Section End */}
            {/* Popular Services Start */}
            <section className="popular-services rel z-1 py-150 rpy-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="service-left rmb-55 wow fadeInLeft delay-0-2s">
                                <img src="/assets/images/concerns_popular-category_image.jpg" alt="Services" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="popular-service-wrap wow fadeInRight delay-0-2s">
                                <div className="section-title mb-50">
                                    <span className="bg-text">offers</span>
                                    <span className="sub-title">Popular Service</span>
                                    <h2>Beauty Treatments</h2>
                                </div>
                                <div className="row">
                                    {all_services && all_services.map((item) => {
                                        return (
                                            <div className="col-xl-4 col-lg-6 col-sm-4 col-6 col-small">
                                                <BodyTreatmentCard
                                                    name={item.name}
                                                    icon_image={`${URI}${item.icon}`}
                                                />
                                            </div>
                                        )
                                    })}

                                </div>
                                <a href="booking.html" className="theme-btn mt-30">make appointment <i className="fas fa-long-arrow-alt-right" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="assets/images/shapes/service-white-leaf.png" alt="Shape" className="white-leaf" />
                <img src="assets/images/shapes/service-color-leaf.png" alt="Shape" className="color-leaf" />
                <img src="assets/images/shapes/service-circle.png" alt="Shape" className="circle" />
            </section>

            {
                // <div className="video-section-two wow fadeInUp delay-0-2s" style={{ backgroundImage: 'url(assets/images/video/service-page-video.jpg)' }}>
                //     <a href="https://www.youtube.com/watch?v=9Y7ma241N8k" className="mfp-iframe video-play"><i className="fas fa-play" /></a>
                // </div>
            }
            <Footer />
        </div>
    )
}

export default Service