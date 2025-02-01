import React from 'react'

function Team({ image, name, content, job_role }) {
    return (
        <div>
            <section className="expert-section rel z-1 pt-140 rpt-90 mb-120 rmb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-9 col-md-10">
                            <div className="section-title text-center mb-65">
                                <span className="bg-text">Experts</span>
                                <span className="sub-title">OUR TEAM OF EXPERTS</span>
                                <h2>MEET OUR FOUNDER/DIRECTOR</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="doctor-image">
                                <img src={image} />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <h3>{name}</h3>
                            <span>{job_role}</span><br />
                            <span><strong><i> Founder, Rejuve Aesthetics</i></strong></span>
                            <p style={{ paddingTop: 15 }}>
                                {content}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Team