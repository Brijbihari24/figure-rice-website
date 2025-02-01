import React from 'react'
import Header from '../../components/common/header/Header'
import Footer from '../../components/common/footer/Footer'
import ContactForm from './ContactForm'
import Breadcrum from '../../components/breadcrum/Breadcrum'
import { Link } from 'react-router-dom'
import { URI } from '../../domain/constant';
import { useGetWebpage } from '../../shared/hooks/UseWebpage'
import renderHTML from "react-render-html";
import { useCreateContact, useSelectAllContact } from "../../shared/hooks/UseContact";
import { Helmet } from 'react-helmet'


function Contact() {
  const [webpage_data] = useGetWebpage()
  const { webpages, loading } = webpage_data;


  return (
    <div>
      <Header />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Us -  Rejuve Aesthetics</title>
        <meta name="description" content="Rejuve Aesthetics is the Best Skin Clinic in Guwahati. Call : +91-80116 11002 or Email at Rejuveaestheticlinic@gmail.com for Skin Treatment in Guwahati."
        />
      </Helmet>
      <section className="page-banner text-white py-165 rpy-130" style={{ backgroundImage: 'url(/assets/images/banner_image.jpg)' }}>
        <div className="container">
          <div className="banner-inner text-center">
            <span className="bg-text">Contact Us</span>
            <h1 className="page-title wow fadeInUp delay-0-2s">Contact Us</h1>
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
      <section className="contact-info-section pt-150 rpt-100 pb-120 rpb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="contact-info-item wow fadeInUp delay-0-2s">
                <i className="fas fa-map-marker-alt" />
                <h4>Location</h4>
                <p>  <a>2nd Floor, Gulshan Grand Building, above Hansa Bahini Furnishing,
                  Swaraj Nagar, Sarumotoria, Guwahati,
                  Assam- 781006</a></p>
                <hr />
                <p>Call : <a href={`tel:+91-8011611002`}>+91-8011611002</a></p>
              </div>

            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="contact-info-item wow fadeInUp delay-0-2s">
                <i className="fas fa-map-marker-alt" />
                <h4>Location</h4>
                <p><a>{webpages && webpages.address}</a></p>
                <hr />
                <p>Call : <a href={`tel:{webpages && webpages.contact_no1}`}>{webpages && webpages.contact_no1}</a></p>
                <p>Call : <a href={`tel:{webpages && webpages.contact_no2}`}>{webpages && webpages.contact_no2}</a></p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="contact-info-item wow fadeInUp delay-0-4s">
                <i className="fa fa-envelope-open-text" />
                <h4>Email Us</h4>
                <p><a href={`mailto:{webpages && webpages.email_address}`}>{webpages && webpages.email_address}</a></p>
              </div>
            </div>

            {/* <div className="col-lg-3 col-sm-6">
              <div className="contact-info-item wow fadeInUp delay-0-6s">
                <i className="fa fa-phone-alt" />
                <h4>Hotline</h4>
                <p>Call : <a href={`tel:{webpages && webpages.contact_no1}`}>{webpages && webpages.contact_no1}</a></p>
                <p>Call : <a href={`tel:+91-8011611002`}>+91-8011611002</a></p>
                <p>Call : <a href={`tel:{webpages && webpages.contact_no2}`}>{webpages && webpages.contact_no2}</a></p>
              </div>
            </div> */}

          </div>
        </div>
      </section>
      <div className="contact-page-map wow fadeInUp delay-0-2s">
        <iframe src={webpages && webpages.map_integrate_links} style={{ border: 0, width: '100%' }} allowFullScreen loading="lazy" />
      </div>
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact