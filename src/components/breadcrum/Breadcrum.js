import React from 'react'
import { Link } from 'react-router-dom'
import { URI } from '../../domain/constant';

function Breadcrum({ bg_heading, page_title, breadcrumb_image }) {
  return (
    <>
      <section className="page-banner text-white py-165 rpy-130" style={{ backgroundImage: `url(${URI}${breadcrumb_image})` }}>
        <div className="container">
          <div className="banner-inner text-center">
            <span className="bg-text">{bg_heading}</span>
            <h1 className="page-title wow fadeInUp delay-0-2s">{page_title}</h1>
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
    </>
  )
}

export default Breadcrum;
