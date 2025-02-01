import React from 'react'
import { URI } from "../../domain/constant";
import { useSelectAllCollection } from "../../shared/hooks/UseCollection";
import { Link } from "react-router-dom";

function WhatWeOffer() {
  const [data] = useSelectAllCollection();
  const { all_collections, all_collections_loading } = data;
  return (
    <div>
      <section className="offer-section text-center mb-120 rel z-1 pt-140 rpt-90">
        <div className="container">
          <div className="reatures-leaf">
            <img src="assets/images/shapes/feature-leaf.png" alt="Leaf" />
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-9 col-md-10">
              <div className="section-title mb-65">
                <span className="bg-text">Services</span>
                <span className="sub-title">What We Offer</span>
                <h2>Quality &amp; Natural Skin Care</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {
              all_collections && all_collections.map((item) => {
                return (

                  <div className="col-xl-2 col-lg-3 col-sm-4 col-6 col-small">
                    <Link to={`/collections/${item.slug}`}>
                      <a className="offer-item wow fadeInUp delay-0-2s" href="#">
                        <img src={`${URI}${item.icon}`} />
                        <h5 className='text-t-uppercase'>{item.name}</h5>
                      </a>
                    </Link>
                  </div>
                )
              })
            }

          </div>
        </div>
      </section>
    </div>
  )
}

export default WhatWeOffer