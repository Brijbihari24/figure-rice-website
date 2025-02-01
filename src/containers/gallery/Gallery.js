import React from 'react'
import Header from '../../components/common/header/Header'
import Footer from '../../components/common/footer/Footer'
import Breadcrum from '../../components/breadcrum/Breadcrum'

function Gallery() {
    return (
        <div>
            <Header />

            <Breadcrum bg_heading={"Gallery"} page_title={"Gallery"} />
            <section className="gallery">
                <h3 className="fw-bold privacy-heading">Gallery</h3>
                <hr />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 ">
                            <div className="gallery-cards">
                                <div className="service-item wow fadeInUp delay-0-2s">
                                    <img src="/assets/images/instagram/instagram-1.jpg" alt="Service" />
                                    <div className="service-content">
                                        <h5><a href="service-details.html">test</a></h5>
                                        <a href="service-details.html" className="read-more">read more <i className="fas fa-long-arrow-alt-right" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 ">
                            <div className="gallery-cards">
                                <div className="service-item wow fadeInUp delay-0-2s">
                                    <img src="/assets/images/instagram/instagram-1.jpg" alt="Service" />
                                    <div className="service-content">
                                        <h5><a href="service-details.html">test</a></h5>
                                        <a href="service-details.html" className="read-more">read more <i className="fas fa-long-arrow-alt-right" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 ">
                            <div className="gallery-cards">
                                <div className="service-item wow fadeInUp delay-0-2s">
                                    <img src="/assets/images/instagram/instagram-1.jpg" alt="Service" />
                                    <div className="service-content">
                                        <h5><a href="service-details.html">test</a></h5>
                                        <a href="service-details.html" className="read-more">read more <i className="fas fa-long-arrow-alt-right" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Gallery