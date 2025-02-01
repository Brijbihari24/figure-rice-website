import React from 'react'

function Category() {
    return (
        <>
            <section className="category ptb-60 bg-offwhite">
                <div className="container">
                    <div className="row">
                        <div className="section-title text-align-center">
                            <h3>Our Category</h3>
                            <p>Our range of finest basmati rice comes from thousands of rice growers across India</p>
                        </div>
                    </div>
                    <hr class="sep-3" />
                    <div className="row mt-4rem">
                        <div className="col-md-4">
                            <div className="category-card">
                                <div className="category img">
                                    <img
                                        src="/assets/images/about-us/fwdclassic1kg/2.jpg"
                                        alt=""
                                        width={280}
                                    />
                                </div>
                                <div className="category-title">
                                    <h3>Cholesterol-Free Basmati Rice Range</h3>
                                    <p>know More</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="category-card">
                                <div className="category img">
                                    <img
                                        src="/assets/images/about-us/fwdclassic1kg/2.jpg"
                                        alt=""
                                        width={280}
                                    />
                                </div>
                                <div className="category-title">
                                    <h3>Cholesterol-Free Basmati Rice Range</h3>
                                    <p>know More</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="category-card">
                                <div className="category img">
                                    <img
                                        src="/assets/images/about-us/fwdclassic1kg/2.jpg"
                                        alt=""
                                        width={280}
                                    />
                                </div>
                                <div className="category-title">
                                    <h3>Cholesterol-Free Basmati Rice Range</h3>
                                    <p>know More</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Category