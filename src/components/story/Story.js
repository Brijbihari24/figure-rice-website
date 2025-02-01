import React from 'react'

function Story() {
    return (
        <>
            <section className="story-sec ptb-60">
                <div className="container">
                    <div className="row">
                        <div className="section-title text-align-center">
                            <h3>Basmati: The King Of Grains</h3>
                            <p>Our range of finest basmati rice comes from thousands of rice growers across India</p>
                        </div>
                    </div>
                    <hr class="sep-3" />
                    <div className="row mt-4rem align-item-center">
                        <div className="col-md-5">
                            <div className="story-video">
                                <iframe width={500} height={320} src="https://www.youtube.com/embed/uZtb-o3L3hQ?si=AegydDj8eco0UoBE" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="story-content">
                                <div className="story-para">
                                    <p>At <strong>Figure Natural Private Limited</strong> , we believe in the transformative power of healthy eating and the profound impact it can have on lives. As a prominent rice miller and exporter, we specialize in premium-quality basmati steamed and parboiled rice, including the finest basmati and sella rice varieties. Our commitment to innovation, quality, and health drives us to provide products that not only nourish but also inspire healthier lifestyles across India and beyond.</p>
                                    <p>At Figure Natural, we understand that our strength lies in our people. We foster a workplace culture that values and respects our employees, ensuring their well-being and growth. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Story