import React from 'react'
import { URI } from "../../domain/constant";
import { Link } from "react-router-dom";

function Banner() {


  return (
    <div>
      <section style={{ backgroundImage: 'url("/assets/images/freepik-export-20250108180911RZHC.jpeg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', 'width': '100%', 'height': 'auto' }}>
        <div className="container-lg">
          <div className="row">
            <div className="col-md-7 pt-5 mt-5">
              <h2 className="display-1 ls-1">
                <span className="fw-bold text-primary">Premium Quality Rice</span> Delivered Fresh to Your Doorstep
              </h2>
              <p className="fs-4">
                Premium and healthy Rice Brand
              </p>
              <div className="d-flex gap-3">
                <a href="#" className="btn btn-primary text-uppercase fs-6 rounded-pill px-4 py-3 mt-3">Start Shopping</a>
                <a href="#" className="btn btn-dark text-uppercase fs-6 rounded-pill px-4 py-3 mt-3">Join Now</a>
              </div>
              <div className="row my-5">
                <div className="col">
                  <div className="row text-dark">
                    <div className="col-auto"><p className="fs-1 fw-bold lh-sm mb-0">14k+</p></div>
                    <div className="col"><p className="text-uppercase lh-sm mb-0">Product Varieties</p></div>
                  </div>
                </div>
                <div className="col">
                  <div className="row text-dark">
                    <div className="col-auto"><p className="fs-1 fw-bold lh-sm mb-0">50k+</p></div>
                    <div className="col"><p className="text-uppercase lh-sm mb-0">Happy Customers</p></div>
                  </div>
                </div>
                <div className="col">
                  <div className="row text-dark">
                    <div className="col-auto"><p className="fs-1 fw-bold lh-sm mb-0">10+</p></div>
                    <div className="col"><p className="text-uppercase lh-sm mb-0">Store Locations</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div>

        </div>
      </section>
    </div>
  )
}

export default Banner