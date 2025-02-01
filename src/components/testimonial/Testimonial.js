import React from 'react'
import { URI } from "../../domain/constant";
import { useSelectAllTestimonial } from "../../shared/hooks/UseTestimonial";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import NextArrowComponent from "../slider/NextArrowComponent";
import PreArrowComponent from "../slider/PreArrowComponent";
import TestimonialCard from './TestimonialCard';

function Testimonial() {
  const settings = {
    dots: true,
    // nav: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrowComponent />,
    prevArrow: <PreArrowComponent />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],

    // dots: true,
    // infinite: true,
    // slidesToShow: 3,
    // slidesToScroll: 1,
    // autoplay: true,
    // speed: 4000,
    // autoplaySpeed: 4000,
    // cssEase: "linear"
  };
  const [data] = useSelectAllTestimonial();
  const { all_testimonials, all_testimonials_loading } = data;
  return (
    <div>

      <section className="testimonials-sec ptb-60 bg-offwhite">
        <div className="container">
          <div className="row">
            <div className="section-title text-align-center">
              <h3>Testimonials</h3>
              <p>Our range of finest basmati rice comes from thousands of rice growers across India</p>
            </div>
          </div>
          <hr class="sep-3" />
          <div className="row mt-4rem">
            <Slider {...settings} className='m-45-15'>
              <div className="col-md-6">
                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <div className="testimonial-para">
                      <p>I was skeptical at first, but after trying Figure Rice, I’m never going back to local stores. The grains are fresh, aromatic, and perfect for daily meals! </p>
                      <p><span> – Priya Verma</span></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <div className="testimonial-para">
                      <p>I was skeptical at first, but after trying Figure Rice, I’m never going back to local stores. The grains are fresh, aromatic, and perfect for daily meals! </p>
                      <p><span> – Amita Banerjee</span></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <div className="testimonial-para">
                      <p>I was skeptical at first, but after trying Figure Rice, I’m never going back to local stores. The grains are fresh, aromatic, and perfect for daily meals! </p>
                      <p><span> – Priya Verma</span></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <div className="testimonial-para">
                      <p>I was skeptical at first, but after trying Figure Rice, I’m never going back to local stores. The grains are fresh, aromatic, and perfect for daily meals! </p>
                      <p><span> – Tripti Yadav</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>

          </div>
        </div>
      </section>

      {
        // <section className="feedback-section-two rel pt-135 rpt-85 rpb-100">
        //   <div className="container">
        //     <div className="section-title-with-btn mb-15">
        //       <div className="section-title mb-15">
        //         <span className="bg-text">Feedback</span>
        //         <span className="sub-title">Customer Testimonials</span>
        //         <h2>Valuable Clients Feedback</h2>
        //       </div>
        //       <div className="feedback-arrows">
        //         <button className="feedback-prev">
        //           <i className="fas fa-long-arrow-alt-left" />
        //         </button>
        //         <button className="feedback-next">
        //           <i className="fas fa-long-arrow-alt-right" />
        //         </button>
        //       </div>
        //     </div>
        //     <div className="feedback-active">
        //       {all_testimonials && (
        //         <Slider {...settings} className='m-45-15'>
        //           {
        //             all_testimonials && all_testimonials.map((item) => {
        //               return (
        //                 <TestimonialCard testimonial={item.testimonial} name={item.name} />
        //               )
        //             })
        //           }
        //         </Slider>
        //       )}
        //     </div>
        //     <div className="feedback-progress">
        //       <div className="progress" role="progressbar" aria-valuemin={0} aria-valuemax={100}>
        //         <span className="slider__label sr-only" />
        //       </div>
        //     </div>
        //   </div>
        // </section >
      }

    </div >
  )
}

export default Testimonial