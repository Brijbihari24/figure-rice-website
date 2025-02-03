import React from 'react'
import Header from '../../components/common/header/Header'
import Footer from '../../components/common/footer/Footer'
import HomeAbout from '../../components/home_about/HomeAbout'
import Dillipasand from '../../components/dilli/Dillipasand'


function About() {


  return (
    <div>
      <Header />
      <section className="about-sec ptb-60">
        <div className="container">
          <div className="row align-item-center">
            <div className="col-md-7">
              <div className="about-sec-title ">
                <h1>About Figure Natural Private Limited</h1>
              </div>
              <div className="about-sec-content">
                <div className="about-sec-para">
                  <p>At <strong>Figure Natural Private Limited</strong>, we are passionate about transforming lives through healthy eating. As a leading rice miller and exporter, we specialize in premium-quality basmati steamed and parboiled rice, with a focus on cholesterol-free, low-GI, and organic rice.</p>

                  <p>Founded in 2022 as the sister company of the renowned <strong>Delhi Pasand Basmati Rice</strong>, Figure Natural continues a legacy built on innovation, research, and a deep commitment to health. Our advanced facility in Sirsa, Haryana, utilizes multi-stage milling and sorting technology and state-of-the-art UK & US-based machinery to ensure that every grain is processed with precision and care.</p>

                  <p>Recently, we have partnered with celebrated actress <strong>Shweta Tiwari</strong> as our brand ambassador. Her vibrant persona and healthy lifestyle resonate perfectly with our brand’s mission to inspire healthier food habits across the nation.</p>

                  <p>At <strong>Figure Natural Private Limited</strong>, we believe in the transformative power of healthy eating and the profound impact it can have on lives. As a prominent rice miller and exporter, we specialize in premium-quality basmati steamed and parboiled rice, including the finest basmati and sella rice varieties. Our commitment to innovation, quality, and health drives us to provide products that not only nourish but also inspire healthier lifestyles across India and beyond.</p>

                </div>
              </div>
            </div>

            <div className="col-md-5">
              <div className="about-sec-img">
                <img src="/assets/images/about-us/1-removebg-preview.png" alt="" />
              </div>
            </div>
          </div>
          <div className="row align-item-center mt-4rem">
            <div className="col-md-5">
              <div className="about-sec-img">
                <img src="/assets/images/about-us/1-removebg-preview.png" alt="" />
              </div>
            </div>
            <div className="col-md-7">
              <div className="about-sec-content">
                <div className="about-sec-para">


                  <h2>A Legacy of Health and Excellence</h2>

                  <p>Launched as the sister company of the renowned <strong>Delhi Pasand Basmati Rice</strong>, Figure Natural carries forward a legacy rooted in deep research and a passion for wellness. Delhi Pasand has already revolutionized the rice market with its cholesterol-free, low-GI, and organic rice ranges, aiming to make India healthier. This shared vision of promoting healthy eating habits underscores everything we do.</p>

                  <p>Our advanced milling facility, located in Sirsa, Haryana, utilizes multi-stage milling and sorting technology and cutting-edge UK and US-based machines. The rice grains are processed with RO water, ensuring they are pure, clean, and free from harmful substances. Every grain is a testament to our uncompromising focus on quality and nutrition.</p>


                </div>
              </div>
            </div>
          </div>
          <div className="row align-item-center mt-4rem">
            <div className="col-md-7">
              <div className="about-sec-content">
                <div className="about-sec-para">


                  <h2>Commitment to a Healthier India</h2>

                  <p>Both <strong>Figure Natural</strong> and <strong>Delhi Pasand</strong> are driven by the mission of building a healthier India. Extensive research and a deep understanding of consumer needs guide our product innovation. From cholesterol-free rice to organic and low-GI options, we are committed to offering rice that caters to specific health requirements, making healthy eating accessible to all.</p>

                  <p>Our rice is lab-tested to meet stringent quality standards, ensuring it is free from cholesterol, preservatives, and harmful additives. This dedication to health is further reflected in our efforts to educate consumers about the importance of conscious eating through surveys, campaigns, and other initiatives.</p>



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
      <Dillipasand />
      <Footer />
    </div>
  )
}

export default About