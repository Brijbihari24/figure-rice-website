import React from 'react'
import Header from '../../components/common/header/Header'
import Footer from '../../components/common/footer/Footer'
import Breadcrum from '../../components/breadcrum/Breadcrum'
import { useSelectAllCollection } from "../../shared/hooks/UseCollection"
import { Link } from 'react-router-dom'
import { URI } from '../../domain/constant';
import CountUp from 'react-countup';
import BodyTreatmentCard from '../service/BodyTreatmentCard'
import CollectionCard from './CollectionCard'

function Collection() {
    const [collection_data] = useSelectAllCollection();
    const { all_collections, all_collections_loading } = collection_data;

    console.log("All collections -", all_collections);
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
            <section className="page-banner text-white py-165 rpy-130" style={{ backgroundImage: 'url(/assets/images/banner_image.jpg)' }}>
                <div className="container">
                    <div className="banner-inner text-center">
                        <span className="bg-text">Concerns</span>
                        <h1 className="page-title wow fadeInUp delay-0-2s">Concerns</h1>
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
                                <h4>We pride ourselves on providing a personalized experience for clients who walk through our doors. Our team will work closely with you to create a treatment plan that is tailored to your unique needs and goals.</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {all_collections && all_collections.map((item) => {
                            return (
                                <div className="col-lg-4 col-sm-6">
                                    <Link to={`/collections/${item.slug}`}>
                                        <CollectionCard
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
                                    <span className="sub-title">Popular Concerns</span>
                                    <h2>Beauty Treatments</h2>
                                </div>
                                <div className="row">
                                    {all_collections && all_collections.map((item) => {
                                        return (
                                            <div className="col-xl-4 col-lg-6 col-sm-4 col-6 col-small">
                                                <Link to={`/collections/${item.slug}`}>
                                                    <BodyTreatmentCard
                                                        name={item.name}
                                                        icon_image={`${URI}${item.icon}`}
                                                    />
                                                </Link>
                                            </div>
                                        )
                                    })}
                                </div>
                                <Link to="/contact-us" className="theme-btn mt-30">make appointment <i className="fas fa-long-arrow-alt-right" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="assets/images/shapes/service-white-leaf.png" alt="Shape" className="white-leaf" />
                <img src="assets/images/shapes/service-color-leaf.png" alt="Shape" className="color-leaf" />
                <img src="assets/images/shapes/service-circle.png" alt="Shape" className="circle" />
            </section>

            {
                //     <div className="video-section-two wow fadeInUp delay-0-2s" style={{ backgroundImage: 'url(assets/images/video/service-page-video.jpg)' }}>
                //     <a href="https://www.youtube.com/watch?v=9Y7ma241N8k" className="mfp-iframe video-play"><i className="fas fa-play" /></a>
                // </div>
            }
            <Footer />
        </div>
    )
}

export default Collection