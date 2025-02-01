import React from 'react'
import { Link } from 'react-router-dom'

function HomeAbout() {
  return (
    <div>
      <section className="about-sec ptb-60">
        <div className="container">
          <div className="row align-item-center">
            <div className="col-md-7">
              <div className="about-sec-title ">
                <h1>About Figure Natural Private Limited</h1>
              </div>
              <div className="about-sec-content">
                <div className="about-sec-para">
                  <p>
                    At Figure Natural Private Limited, we are passionate about transforming lives through healthy eating. As a leading rice miller and exporter, we specialize in premium-quality basmati steamed and parboiled rice, with a focus on cholesterol-free, low-GI, and organic rice.
                  </p>

                  <p>Founded in 2022 as the sister company of the renowned Delhi Pasand Basmati Rice, Figure Natural continues a legacy built on innovation, research, and a deep commitment to health. Our advanced facility in Sirsa, Haryana, utilizes multi-stage milling and sorting technology and state-of-the-art UK & US-based machinery to ensure that every grain is processed with precision and care.</p>

                  <p>
                    Recently, we have partnered with celebrated actress Shweta Tiwari as our brand ambassador. Her vibrant persona and healthy lifestyle resonate perfectly with our brand’s mission to inspire healthier food habits across the nation.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-5">
              <div className="about-sec-img">
                <img src="/assets/images/about-us/1-removebg-preview.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeAbout