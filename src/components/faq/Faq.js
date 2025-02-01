import React, { useState } from 'react'
import { useSelectAllFaq } from "../../shared/hooks/UseFaq";

function Faq() {
    const [faq, setFaq] = useState(0);

    const [data] = useSelectAllFaq();
    const { all_faqs, all_faqs_loading } = data;

    console.log("All Faqs -", all_faqs);
    return (
        <div>
            <section className="faq-page rpt-90 pb-150 rpb-100" id="faq-accordion">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-9 col-md-10">
                            <div className="section-title text-center mb-65">
                                <span className="bg-text">Faqs</span>
                                <span className="sub-title">Asked Questions</span>
                                <h4> Asked Questions Have Any Questions On Minds! Take a Look
                                    Company Faqs</h4>
                            </div>
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
            </section>

        </div>
    )
}

export default Faq