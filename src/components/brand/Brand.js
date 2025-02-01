import React from 'react'
import { URI } from '../../domain/constant'

function Brand({ content }) {
  console.log('Content', content)
  return (
    <div>
      <section className="section-padding">
        <div className="container">
          <div className="text-center pb-3">
            <h3 className="mb-0 h3 fw-bold">Shop By Brands</h3>
            <p className="mb-0 text-capitalize">
              Select your favorite brands and purchase
            </p>
          </div>
          <div className="brands">
            <div className="row row-cols-2 row-cols-lg-5 g-4">
              {content &&
                content.gallery_component &&
                content.gallery_component.map((item) => {
                  return (
                    <div className="col">
                      <div className="p-3 border rounded brand-box">
                        <div className="d-flex align-items-center">
                          <a href="javascript:;">
                            <img
                              src={`${URI}${item.image}`}
                              className="img-fluid"
                              alt
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  )
                })}
            </div>
            {/*end row*/}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Brand
