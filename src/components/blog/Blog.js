import React from 'react'
import BlogCard from './BlogCard'
import { URI } from "../../domain/constant";
import { Link } from "react-router-dom";

function Blog() {

  return (
    <div>
      <section className="blogs ptb-60 bg-offwhite">
        <div className="container">
          <div className="row">
            <div className="section-title text-align-center">
              <h3>Blogs & Updates</h3>
              <p>Our range of finest basmati rice comes from thousands of rice growers across India</p>
            </div>
          </div>
          <hr className="sep-3" />
          <div className="row mt-4rem">
            <div className="col-md-4">
              <div className="blog-card">
                <div className="blog-card-inside-box">
                  <div className="blog-card-img">
                    <img
                      src="/assets/images/product-large-3.jpg"
                      alt="blog-img"
                      width={374}
                    />
                  </div>
                  <div className="blog-card-content">
                    <div className="blog-card-title">
                      <h3>Low Cholesterol Rice – A Heart-Healthy Choice</h3>
                    </div>
                    <div className="blog-card-para">
                      <p>Enjoy the goodness of rice without worrying about cholesterol. Perfect for a balanced diet and a healthy heart.</p>
                    </div>
                    <div className="product-details">
                      <p>Know More</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog-card">
                <div className="blog-card-inside-box">
                  <div className="blog-card-img">
                    <img
                      src="/assets/images/product-large-3.jpg"
                      alt="blog-img"
                      width={374}
                    />
                  </div>
                  <div className="blog-card-content">
                    <div className="blog-card-title">
                      <h3>Low Cholesterol Rice – A Heart-Healthy Choice</h3>
                    </div>
                    <div className="blog-card-para">
                      <p>Enjoy the goodness of rice without worrying about cholesterol. Perfect for a balanced diet and a healthy heart.</p>
                    </div>
                    <div className="product-details">
                      <p>Know More</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog-card">
                <div className="blog-card-inside-box">
                  <div className="blog-card-img">
                    <img
                      src="/assets/images/product-large-3.jpg"
                      alt="blog-img"
                      width={374}
                    />
                  </div>
                  <div className="blog-card-content">
                    <div className="blog-card-title">
                      <h3>Low Cholesterol Rice – A Heart-Healthy Choice</h3>
                    </div>
                    <div className="blog-card-para">
                      <p>Enjoy the goodness of rice without worrying about cholesterol. Perfect for a balanced diet and a healthy heart.</p>
                    </div>
                    <div className="product-details">
                      <p>Know More</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog