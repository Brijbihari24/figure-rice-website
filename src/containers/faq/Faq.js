import React, { useState } from 'react'
import Header from '../../components/common/header/Header'
import Footer from '../../components/common/footer/Footer'
import Breadcrum from '../../components/breadcrum/Breadcrum'
import MakeAppointment from '../../components/make_appointment/MakeAppointment'
import { useSelectAllFaq } from "../../shared/hooks/UseFaq";


function Faq() {
    const [faq, setFaq] = useState(0);

    const [data] = useSelectAllFaq();
    const { all_faqs, all_faqs_loading } = data;

    console.log("All Faqs -", all_faqs);
    return (
        <div>
            <Header />
            <section className="page-banner text-white py-165 rpy-130" style={{ backgroundImage: 'url(/assets/images/banner_image.jpg)' }}>
                <div className="container">
                    <div className="banner-inner text-center">
                        <span className="bg-text">FAQ's</span>
                        <h1 className="page-title wow fadeInUp delay-0-2s">FAQ's</h1>
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
            <section className="faq-page pt-140 pb-150 rpt-90 rpb-100" id="faq-accordion">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="faq-content wow fadeInLeft delay-0-2s">
                                <div className="section-title mb-65">
                                    <span className="bg-text">faqs</span>
                                    <span className="sub-title">Asked Questions</span>
                                    <h2>Have Any Questions On Minds! Take a Look Company Faqs</h2>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-8 mx-auto">
                                    {
                                        all_faqs && all_faqs.map((item, index) => {
                                            return (
                                                <div className="faq-content wow fadeInLeft delay-0-2s animated" style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                                                    <div className="faq-accordion">
                                                        <div className="card">
                                                            <a onClick={() => setFaq(index)} className={faq === index ? " card-header" : "collapsed  card-header"} id="heading4" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">{item.question}<i className="fas fa-chevron-down" />
                                                            </a>
                                                            <div id="collapse4" className={faq === index ? "collapse show" : "collapse"} data-parent="#faq-accordion">
                                                                <div className="card-body" style={{ display: faq === index ? "block" : "none" }}>
                                                                    <p>
                                                                        {item.answer}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <MakeAppointment />
            <Footer />
        </div>
    )
}

export default Faq