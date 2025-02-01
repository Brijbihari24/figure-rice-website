import React from 'react'
import CountUp from 'react-countup';


function WhyUs() {
    return (
        <div>
            <section className="pricing-section rel z-1 pt-140 rpt-90 mb-120 rmb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-9 col-md-10">
                            <div className="section-title text-center mb-65">
                                <span className="bg-text">Why Us</span>
                                <span className="sub-title">Why Us</span>
                                <h2>Why  Rejuve Aesthetics</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="why-heading">
                                <h2>DESTINATION FOR HIGH-QUALITY MEDICAL AESTHETIC TREATMENTS & TOP-NOTCH SKIN AND BODY CARE SERVICES.</h2>
                                <p>
                                    Our mission is to help you achieve your best, most confident self through our advanced aesthetic treatments and personalized care. We believe that beautiful skin reflects good health, which is why we offer a comprehensive range of skin care treatments designed to promote healthy, youthful-looking skin.
                                </p>
                            </div>
                            <div className="row d-flex">
                                <div className="col-md-4">
                                    <div className="counter-item why-stats-shadow wow fadeInUp delay-0-2s counted animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                                        <span className="count-text" data-speed={5000} data-stop={6203}>40k+</span>
                                        <p>Happy Clients</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="counter-item why-stats-shadow wow fadeInUp delay-0-2s counted animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                                        <span className="count-text" data-speed={5000} data-stop={6203}>8+</span>
                                        <p>Years of Experience</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="counter-item why-stats-shadow wow fadeInUp delay-0-2s counted animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                                        <span className="count-text" data-speed={5000} data-stop={6203}>100+</span>
                                        <p>Team Members</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="feature-item wow fadeInUp delay-0-2s animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                                <div className="icon">
                                    <i className="flaticon-laser" />
                                </div>
                                <div className="feature-content">
                                    <h4>
                                        <a href="#">Laser Hair Reduction</a>
                                    </h4>
                                    <span>Our laser technology is safe and effective for all skin types, providing long-lasting results with minimal discomfort.</span>
                                </div>
                            </div>
                            <div className="feature-item wow fadeInUp delay-0-2s animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                                <div className="icon">
                                    <i className="flaticon-laser" />
                                </div>
                                <div className="feature-content">
                                    <h4>
                                        <a href="#">Skincare Treatments</a>
                                    </h4>
                                    <span>Our clinic is equipped with the latest technology and staffed with highly trained aestheticians and skincare professionals who are passionate about helping our patients achieve their skincare goals.
                                    </span>
                                </div>
                            </div>
                            <div className="feature-item wow fadeInUp delay-0-2s animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                                <div className="icon">
                                    <i className="flaticon-laser" />
                                </div>
                                <div className="feature-content">
                                    <h4>
                                        <a href="#">Body Contouring</a>
                                    </h4>
                                    <span>At Rejuve Aesthetics, we understand that achieving the ideal body shape can be challenging, especially with factors like genetics, age, and lifestyle affecting body composition.
                                    </span>
                                </div>
                            </div>
                            <div className="feature-item wow fadeInUp delay-0-2s animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                                <div className="icon">
                                    <i className="flaticon-laser" />
                                </div>
                                <div className="feature-content">
                                    <h4>
                                        <a href="#">MediFacials </a>
                                    </h4>
                                    <span>Our facials are designed to provide a deep cleansing and rejuvenating experience, leaving your skin feeling refreshed, nourished, and revitalized.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="price-left-shape">
                    <img src="assets/images/shapes/price-left.png" alt="Shape" />
                </div>
                <div className="price-bg-shape">
                    <img src="assets/images/shapes/price-bg.png" alt="Shape" />
                </div>
            </section>
        </div>
    )
}

export default WhyUs