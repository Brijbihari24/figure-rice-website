import React from 'react'
import Header from '../../components/common/header/Header'
import Footer from '../../components/common/footer/Footer'
import Team from '../../components/team/Team'
import Breadcrum from '../../components/breadcrum/Breadcrum'
import { useGetWebpage } from '../../shared/hooks/UseWebpage'
import { URI } from "../../domain/constant";
import renderHTML from "react-render-html";
import { useSelectAllService } from "../../shared/hooks/UseService"
import { Link } from 'react-router-dom'
import AboutImage from "../../assets/images/blogs-banners.jpg"
import { Helmet } from 'react-helmet'

function About() {
  const [webpage_data] = useGetWebpage()
  const { webpages, loading } = webpage_data;

  console.log("WEBPAGES-", webpages);

  const [service_data] = useSelectAllService();
  const { all_services, all_services_loading } = service_data;

  console.log("All Services -", all_services);
  return (
    <div>
      <Header />
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us - Rejuve Aesthetics</title>
        <meta name="description" content="We are Leader in Skin, Medifacial and Dentistry Services. We are determined and dedicated to deliver the most advanced dermatology treatments."
        />
      </Helmet>
      {
        // <Breadcrum bg_heading={"About Us"} page_title={"About Us"} breadcrumb_image={AboutImage} />
      }
      {
        <section className="page-banner text-white py-165 rpy-130" style={{ backgroundImage: 'url(/assets/images/banner_image.jpg)' }}>
          <div className="container">
            <div className="banner-inner text-center">
              <span className="bg-text">About Us</span>
              <h1 className="page-title wow fadeInUp delay-0-2s">About Us</h1>
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
      }

      <section className="about-page-section rel z-2 pt-140 rpt-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-page-content wow fadeInLeft delay-0-2s">
                <div className="section-title mb-30">
                  <span className="bg-text">about</span>
                  <span className="sub-title">Who We Are</span>
                  <h2>Rejuve Aesthetics</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="about-page-right-text wow fadeInRight delay-0-2s">
                <p>At Rejuve Aesthetics, we understand that healthy, radiant skin is not just a luxury but a necessity. We are a leading skin &amp; body care clinic that provides comprehensive skin and body care treatments and services that cater to your specific needs and concerns.</p>

                <p>Our team of highly skilled and experienced aestheticians and skincare professionals are committed to helping you achieve your best skin yet. We use the latest and most advanced techniques and technologies to provide safe, effective, and customized treatments that will enhance your skin's natural beauty.</p>

                <p>Whether you're looking to address signs of aging, such as wrinkles, fine lines, and age spots, or you're dealing with acne, scarring, or other skin concerns, we have the expertise and resources to help you achieve your goals. Our services include skin rejuvenation, acne treatment, laser hair removal, body contouring, and more.</p>

                <p>We pride ourselves on providing a personalized experience for clients who walk through our doors. Our team will work closely with you to create a treatment plan that is tailored to your unique needs and goals. We believe everyone deserves to feel confident and beautiful in their skin, and we're here to help you achieve that.</p>

                <p>At Rejuve Aesthetics, we are committed to using only the highest quality products and equipment in all of our treatments. We prioritize your safety and satisfaction above all else and strive to create a comfortable and welcoming environment where you can relax and enjoy your experience.</p>

                <p>We invite you to schedule a consultation with us today and see for yourself how our expert team can help you achieve the healthy, vibrant skin you've always wanted.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Team
        name={webpages && webpages.doctor_name}
        image={`${URI}${webpages && webpages.doctor_image}`}
        job_role={webpages && webpages.doctor_job_role}
        content={webpages && webpages.doctor_content && renderHTML(webpages.doctor_content)}
      />
      <section className="about-page pb-120 pt-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-9">
              <div className="section-title text-center mb-65">
                <span className="bg-text">Services</span>
                <span className="sub-title">Our Services</span>
                <h2>Popular Services</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {
              all_services && all_services.map((item) => {
                return (
                  <div className='col-lg-4 col-sm-6' >
                    <Link to={`/service/${item.slug}`}>
                      <div className="category-section">
                        <div className="category-item style-two wow fadeInUp delay-0-2s " style={{ width: "100%" }}>
                          <img src={`${URI}${item.icon}`} alt="" />
                          <div className="category-title">
                            <span className="bg-text">Category</span>
                            <h4><a href="service-details.html">{item.name}</a></h4>
                          </div>
                          <p>{item && renderHTML(item.description.substring(0, 120))}</p>
                          <a href="service-details.html" className="read-more">read more <i className="fas fa-long-arrow-alt-right" /></a>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              })
            }
          </div>
        </div>

      </section>
      {
        // TODO: Instagram reels here
      }
      <Footer />
    </div>
  )
}

export default About