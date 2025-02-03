import React from 'react'
import Header from '../../components/common/header/Header'
import Footer from '../../components/common/footer/Footer'


function AboutTeam() {
    return (
        <div>
            <Header />
            <section className="about-team ptb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="section-title text-align-center">
                                <h3>About Our Founders</h3>
                                <p>At <strong>Figure Natural Private Limited</strong>, the foundation of our success lies in the dedication, expertise, and vision of our two exceptional leaders, <strong>Mr. Virender Kumar</strong> and <strong>Mr. Ajay Kumar Goel</strong>. Together, they have transformed a shared dream into a thriving business that has become a trusted name in the rice industry.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4rem">
                        {/* Text Section (7 Columns) */}
                        <div className="col-md-7">
                            <h3>Mr. Virender Kumar – The Visionary Leader</h3>
                            <p>With an unyielding passion for quality and innovation, Mr. Virender Kumar is the driving force behind the company’s vision. His mission has always been clear: to bring premium-quality, healthy, and sustainable rice to every household in India and beyond.</p>
                            <p>As a forward-thinker, Mr. Virender continuously identifies emerging consumer needs and ensures that Figure Natural stays ahead of industry trends. He is deeply committed to fostering healthier eating habits among Indians and has led the charge in launching products like cholesterol-free, low-GI, and organic rice. His dedication to quality is reflected in every grain of rice produced by the company.</p>

                        </div>
                        {/* Image Section (5 Columns) */}
                        <div className="col-md-5">
                            {/* Add your image here */}
                            <img src="/assets/images/shweta/sanjana-sanghi-5k-5504x8256-12125.jpg" className="img-fluid" alt="Founders Image" />
                        </div>
                    </div>
                    <div className="row mt-4rem">
                        <div className="col-md-5">
                            <img src="/assets/images/shweta/sanjana-sanghi-5k-5504x8256-12125.jpg" className="img-fluid" alt="Founders Image" />
                        </div>
                        <div className="col-md-7">
                            <h3>Mr. Ajay Kumar Goel – The Operational Mastermind</h3>
                            <p>Behind every successful operation at Figure Natural Private Limited is the exceptional expertise of Mr. Ajay Kumar Goel. As the mastermind of logistics and operations, he ensures that every process runs seamlessly—from sourcing the finest paddy to delivering premium rice to customers across India and the world.</p>
                            <p>Mr. Ajay’s meticulous attention to detail and commitment to excellence have been instrumental in building a world-class supply chain. His ability to manage complex operations with a focus on efficiency and customer satisfaction has earned the company a reputation for reliability and trustworthiness. With a dedicated team under his guidance, he ensures that every product meets the company’s high standards for quality and service.</p>
                            <p>Together, Mr. Virender Kumar and Mr. Ajay Kumar Goel have been the pillars of strength for the company. Since starting their journey in 2009 with Delhi Pasand Agro Pvt. Ltd., their complementary skills and shared determination have driven the company’s exponential growth. In 2022, they extended their legacy by establishing Figure Natural Private Limited, a brand dedicated to health, innovation, and sustainability.</p>
                            <p>Their leadership has enabled the company to prosper, with a strong presence in India and a growing international footprint. With millions of satisfied customers and a relentless drive to make India healthier, Mr. Virender Kumar and Mr. Ajay Kumar Goel continue to inspire their team and redefine the standards of excellence in the rice industry.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default AboutTeam