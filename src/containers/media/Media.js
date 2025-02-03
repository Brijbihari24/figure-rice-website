import React from 'react'
import Header from '../../components/common/header/Header'
import Footer from '../../components/common/footer/Footer'
import InstagramEmbed from '../../components/InstagramEmbed/InstagraEmbed'
import Features from '../../components/features/Features'

function Media() {
    return (
        <div>
            <Header />
            <section className="media ptb-60 bg-offwhite">
                <div className="container">
                    <div className="row">
                        <div className="section-title text-align-center">
                            <h3>Media and Events</h3>
                            <p>Our range of finest basmati rice comes from thousands of rice growers across India</p>
                        </div>
                    </div>
                    <hr className="sep-3" />
                    <div className="row mt-4rem">
                        <div className="col-md-3">
                            <div className="media-card">
                                <div className="media-card-img">
                                    <img src="/assets/images/shweta/65563e215652583.6770c3a2d6e47.jpg" alt="media-img" width={300} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="media-card">
                                <div className="media-card-img">
                                    <img src="/assets/images/shweta/65563e215652583.6770c3a2d6e47.jpg" alt="media-img" width={300} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="media-card">
                                <div className="media-card-img">
                                    <img src="/assets/images/shweta/65563e215652583.6770c3a2d6e47.jpg" alt="media-img" width={300} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="media-card">
                                <div className="media-card-img">
                                    <img src="/assets/images/shweta/65563e215652583.6770c3a2d6e47.jpg" alt="media-img" width={300} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-4rem'>
                        <InstagramEmbed />
                    </div>
                </div>
            </section >
            <Features />
            <Footer />
        </div >
    )
}

export default Media