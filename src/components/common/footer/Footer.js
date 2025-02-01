import React from 'react'
import { useSelectAllCollection } from "../../../shared/hooks/UseCollection"
import { Link } from 'react-router-dom'
import { URI } from '../../../domain/constant';
import { useGetWebpage } from '../../../shared/hooks/UseWebpage'
import renderHTML from "react-render-html";

function Footer({
  address,
  contact_1,
  contact_2,
  email,
  facebook_link,
  twitter_link,
  youtube_link,
  instagram_link,

}) {

  const [collection_data] = useSelectAllCollection();
  const { all_collections, all_collections_loading } = collection_data;

  const [webpage_data] = useGetWebpage()
  const { webpages, loading } = webpage_data;

  console.log("Webpages -", webpages);

  console.log("All Services -", all_collections);
  return (
    <div>
      <footer className="main-footer footer-three bg-black text-white pt-85">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget menu-widget">
                <h4 className="footer-title">Services</h4>
                <ul>
                  {
                    all_collections && all_collections.map((item) => {
                      return (
                        <li>
                          <Link to={`/collections/${item.slug}`}>
                            {
                              item.name
                            }
                          </Link>
                        </li>
                      )
                    })
                  }

                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget menu-widget">
                <h4 className="footer-title">Quick Links</h4>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                    <Link to="about-us">About</Link>
                    <Link to="/terms-and-conditions">Terms and Conditions</Link>
                    <Link to="/contact-us">Contact Us</Link>
                    <Link to="/concerns">Concerns</Link>
                    {
                      // <Link to="/careers">Careers</Link>
                    }
                    <Link to="/blogs">Blogs</Link>
                    {
                      // <Link to="/gallery">Gallery</Link>
                    }
                  </li>
                </ul>
              </div>
            </div>


            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget newsletter-widget">
                <form action="#" method="post">
                  <h4>Social Media</h4>
                </form>
                <div className="social-style-one pt-40">
                  <a target='_blank' href={webpages && webpages.facebook_link}><i className="fab fa-facebook-f" /></a>
                  {
                    // <a href={webpages && webpages[0] && webpages[0].twitter_link}><i className="fab fa-twitter" /></a>
                  }
                  <a target='_blank' href={webpages && webpages.linkedin_link}><i className="fab fa-linkedin-in" /></a>
                  <a target='_blank' href={webpages && webpages.youtube_link}><i className="fab fa-youtube" /></a>
                  <a target='_blank' href={webpages && webpages.instagram_link}><i className="fab fa-instagram" /></a>
                </div>
                <div className='contact-widget pt-20'>
                  <ul>
                    <li>
                      <i className="far fa-comment" />
                      <div className="info-content">
                        <h5>Email</h5>
                        <a href="mailto:rejuveaestheticclinic@gmail.com">{webpages && webpages.email_address}</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget contact-widget">
                <h4 className="footer-title">Contact</h4>
                <ul>
                  <li>
                    <i className="fas fa-map-marker-alt" />
                    <div className="info-content">
                      <h5>Location</h5>
                      <a>2nd Floor, Gulshan Grand Building, above Hansa Bahini Furnishing,
                        Swaraj Nagar, Sarumotoria, Guwahati,
                        Assam- 781006</a>
                      <p>Call : <a href={`tel:+91-8011611002`}>+91-8011611002</a></p>
                    </div>


                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt" />
                    <div className="info-content">
                      <h5>Location</h5>
                      <a>{webpages && webpages.address}</a>
                      <p>Call : <a href={`tel:{webpages && webpages.contact_no1}`}>{webpages && webpages.contact_no1}</a></p>
                      <p>Call : <a href={`tel:{webpages && webpages.contact_no2}`}>{webpages && webpages.contact_no2}</a></p>
                    </div>
                  </li>
                  {/* <li>
                    <i className="fas fa-phone-alt" />
                    <div className="info-content">
                      <h5>Contact Details</h5>
                      <p><a href={`tel:{webpages && webpages.contact_no1}`}>{webpages && webpages.contact_no1}</a></p>
                      <p><a href={`tel:{webpages && webpages.contact_no2}`}>{webpages && webpages.contact_no2}</a></p>
                    </div>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="copyright-area pt-25 pb-15">
            <ul className="footer-menu py-5">
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions">Terms and Conditions</Link></li>
              <li><Link to="/faqs">Faqs</Link></li>
            </ul>
            <p>Copyright © 2023-2024 Rejuve Aesthetic Clinic. All Rights Reserved.</p>
          </div>
        </div>
      </footer >
      <button className="scroll-top scroll-to-target" data-target="html">
        <span className="fa fa-angle-up" />
      </button>
    </div >
  )
}

export default Footer