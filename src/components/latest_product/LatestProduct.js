import React from 'react'

function LatestProduct() {
  return (
    <div>
      <section className="product-tab-section section-padding bg-light">
        <div className="container">
          <div className="text-center pb-3">
            <h3 className="mb-0 h3 fw-bold">Latest Products</h3>
            <p className="mb-0 text-capitalize">The purpose of lorem ipsum</p>
          </div>
          <div className="row">
            <div className="col-auto mx-auto">
              <div className="product-tab-menu table-responsive">
                <ul
                  className="nav nav-pills flex-nowrap"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      data-bs-toggle="pill"
                      data-bs-target="#new-arrival"
                      type="button"
                    >
                      New Arrival
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      data-bs-toggle="pill"
                      data-bs-target="#best-sellar"
                      type="button"
                    >
                      Best Seller
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      data-bs-toggle="pill"
                      data-bs-target="#trending-product"
                      type="button"
                    >
                      Trending
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      data-bs-toggle="pill"
                      data-bs-target="#special-offer"
                      type="button"
                    >
                      Special Offer
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div className="tab-content tabular-product">
            <div className="tab-pane fade show active" id="new-arrival">
              <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-5 g-4">
                <div className="col">
                  <div className="card">
                    <div className="position-relative overflow-hidden">
                      <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                        <a href="javascript:;">
                          <i className="bi bi-heart" />
                        </a>
                        <a href="javascript:;">
                          <i className="bi bi-basket3" />
                        </a>
                        <a
                          href="javascript:;"
                          data-bs-toggle="modal"
                          data-bs-target="#QuickViewModal"
                        >
                          <i className="bi bi-zoom-in" />
                        </a>
                      </div>
                      <a href="product-details.html">
                        <img
                          src="assets/images/new-arrival/01.webp"
                          className="card-img-top"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div className="card-body">
                      <div className="product-info text-center">
                        <h6 className="mb-1 fw-bold product-name">
                          Product Name
                        </h6>
                        <div className="ratings mb-1 h6">
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                        </div>
                        <p className="mb-0 h6 fw-bold product-price">₹49</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className="ribban">New Season</div>
                    <div className="position-relative overflow-hidden">
                      <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                        <a href="javascript:;">
                          <i className="bi bi-heart" />
                        </a>
                        <a href="javascript:;">
                          <i className="bi bi-basket3" />
                        </a>
                        <a
                          href="javascript:;"
                          data-bs-toggle="modal"
                          data-bs-target="#QuickViewModal"
                        >
                          <i className="bi bi-zoom-in" />
                        </a>
                      </div>
                      <a href="product-details.html">
                        <img
                          src="assets/images/new-arrival/02.webp"
                          className="card-img-top"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div className="card-body">
                      <div className="product-info text-center">
                        <h6 className="mb-1 fw-bold product-name">
                          Product Name
                        </h6>
                        <div className="ratings mb-1 h6">
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                        </div>
                        <p className="mb-0 h6 fw-bold product-price">₹49</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className="position-relative overflow-hidden">
                      <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                        <a href="javascript:;">
                          <i className="bi bi-heart" />
                        </a>
                        <a href="javascript:;">
                          <i className="bi bi-basket3" />
                        </a>
                        <a
                          href="javascript:;"
                          data-bs-toggle="modal"
                          data-bs-target="#QuickViewModal"
                        >
                          <i className="bi bi-zoom-in" />
                        </a>
                      </div>
                      <a href="product-details.html">
                        <img
                          src="assets/images/new-arrival/03.webp"
                          className="card-img-top"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div className="card-body">
                      <div className="product-info text-center">
                        <h6 className="mb-1 fw-bold product-name">
                          Product Name
                        </h6>
                        <div className="ratings mb-1 h6">
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                        </div>
                        <p className="mb-0 h6 fw-bold product-price">₹49</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className="position-relative overflow-hidden">
                      <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                        <a href="javascript:;">
                          <i className="bi bi-heart" />
                        </a>
                        <a href="javascript:;">
                          <i className="bi bi-basket3" />
                        </a>
                        <a
                          href="javascript:;"
                          data-bs-toggle="modal"
                          data-bs-target="#QuickViewModal"
                        >
                          <i className="bi bi-zoom-in" />
                        </a>
                      </div>
                      <a href="product-details.html">
                        <img
                          src="assets/images/new-arrival/04.webp"
                          className="card-img-top"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div className="card-body">
                      <div className="product-info text-center">
                        <h6 className="mb-1 fw-bold product-name">
                          Product Name
                        </h6>
                        <div className="ratings mb-1 h6">
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                        </div>
                        <p className="mb-0 h6 fw-bold product-price">₹49</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className="position-relative overflow-hidden">
                      <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                        <a href="javascript:;">
                          <i className="bi bi-heart" />
                        </a>
                        <a href="javascript:;">
                          <i className="bi bi-basket3" />
                        </a>
                        <a
                          href="javascript:;"
                          data-bs-toggle="modal"
                          data-bs-target="#QuickViewModal"
                        >
                          <i className="bi bi-zoom-in" />
                        </a>
                      </div>
                      <a href="product-details.html">
                        <img
                          src="assets/images/new-arrival/05.webp"
                          className="card-img-top"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div className="card-body">
                      <div className="product-info text-center">
                        <h6 className="mb-1 fw-bold product-name">
                          Product Name
                        </h6>
                        <div className="ratings mb-1 h6">
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                        </div>
                        <p className="mb-0 h6 fw-bold product-price">₹49</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className="position-relative overflow-hidden">
                      <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                        <a href="javascript:;">
                          <i className="bi bi-heart" />
                        </a>
                        <a href="javascript:;">
                          <i className="bi bi-basket3" />
                        </a>
                        <a
                          href="javascript:;"
                          data-bs-toggle="modal"
                          data-bs-target="#QuickViewModal"
                        >
                          <i className="bi bi-zoom-in" />
                        </a>
                      </div>
                      <a href="product-details.html">
                        <img
                          src="assets/images/new-arrival/06.webp"
                          className="card-img-top"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div className="card-body">
                      <div className="product-info text-center">
                        <h6 className="mb-1 fw-bold product-name">
                          Product Name
                        </h6>
                        <div className="ratings mb-1 h6">
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                        </div>
                        <p className="mb-0 h6 fw-bold product-price">₹49</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className="position-relative overflow-hidden">
                      <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                        <a href="javascript:;">
                          <i className="bi bi-heart" />
                        </a>
                        <a href="javascript:;">
                          <i className="bi bi-basket3" />
                        </a>
                        <a
                          href="javascript:;"
                          data-bs-toggle="modal"
                          data-bs-target="#QuickViewModal"
                        >
                          <i className="bi bi-zoom-in" />
                        </a>
                      </div>
                      <a href="product-details.html">
                        <img
                          src="assets/images/new-arrival/07.webp"
                          className="card-img-top"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div className="card-body">
                      <div className="product-info text-center">
                        <h6 className="mb-1 fw-bold product-name">
                          Product Name
                        </h6>
                        <div className="ratings mb-1 h6">
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                        </div>
                        <p className="mb-0 h6 fw-bold product-price">₹49</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className="position-relative overflow-hidden">
                      <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                        <a href="javascript:;">
                          <i className="bi bi-heart" />
                        </a>
                        <a href="javascript:;">
                          <i className="bi bi-basket3" />
                        </a>
                        <a
                          href="javascript:;"
                          data-bs-toggle="modal"
                          data-bs-target="#QuickViewModal"
                        >
                          <i className="bi bi-zoom-in" />
                        </a>
                      </div>
                      <a href="product-details.html">
                        <img
                          src="assets/images/new-arrival/08.webp"
                          className="card-img-top"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div className="card-body">
                      <div className="product-info text-center">
                        <h6 className="mb-1 fw-bold product-name">
                          Product Name
                        </h6>
                        <div className="ratings mb-1 h6">
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                        </div>
                        <p className="mb-0 h6 fw-bold product-price">₹49</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className="position-relative overflow-hidden">
                      <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                        <a href="javascript:;">
                          <i className="bi bi-heart" />
                        </a>
                        <a href="javascript:;">
                          <i className="bi bi-basket3" />
                        </a>
                        <a
                          href="javascript:;"
                          data-bs-toggle="modal"
                          data-bs-target="#QuickViewModal"
                        >
                          <i className="bi bi-zoom-in" />
                        </a>
                      </div>
                      <a href="product-details.html">
                        <img
                          src="assets/images/new-arrival/09.webp"
                          className="card-img-top"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div className="card-body">
                      <div className="product-info text-center">
                        <h6 className="mb-1 fw-bold product-name">
                          Product Name
                        </h6>
                        <div className="ratings mb-1 h6">
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                        </div>
                        <p className="mb-0 h6 fw-bold product-price">₹49</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className="position-relative overflow-hidden">
                      <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                        <a href="javascript:;">
                          <i className="bi bi-heart" />
                        </a>
                        <a href="javascript:;">
                          <i className="bi bi-basket3" />
                        </a>
                        <a
                          href="javascript:;"
                          data-bs-toggle="modal"
                          data-bs-target="#QuickViewModal"
                        >
                          <i className="bi bi-zoom-in" />
                        </a>
                      </div>
                      <a href="product-details.html">
                        <img
                          src="assets/images/new-arrival/10.webp"
                          className="card-img-top"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div className="card-body">
                      <div className="product-info text-center">
                        <h6 className="mb-1 fw-bold product-name">
                          Product Name
                        </h6>
                        <div className="ratings mb-1 h6">
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                        </div>
                        <p className="mb-0 h6 fw-bold product-price">₹49</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="best-sellar">
              <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-5 g-4">
                <div className="col">
                  <div className="card">
                    <div className="position-relative overflow-hidden">
                      <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                        <a href="javascript:;">
                          <i className="bi bi-heart" />
                        </a>
                        <a href="javascript:;">
                          <i className="bi bi-basket3" />
                        </a>
                        <a
                          href="javascript:;"
                          data-bs-toggle="modal"
                          data-bs-target="#QuickViewModal"
                        >
                          <i className="bi bi-zoom-in" />
                        </a>
                      </div>
                      <a href="product-details.html">
                        <img
                          src="assets/images/best-sellar/01.webp"
                          className="card-img-top"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div className="card-body">
                      <div className="product-info text-center">
                        <h6 className="mb-1 fw-bold product-name">
                          Product Name
                        </h6>
                        <div className="ratings mb-1 h6">
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                        </div>
                        <p className="mb-0 h6 fw-bold product-price">₹49</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className="position-relative overflow-hidden">
                      <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                        <a href="javascript:;">
                          <i className="bi bi-heart" />
                        </a>
                        <a href="javascript:;">
                          <i className="bi bi-basket3" />
                        </a>
                        <a
                          href="javascript:;"
                          data-bs-toggle="modal"
                          data-bs-target="#QuickViewModal"
                        >
                          <i className="bi bi-zoom-in" />
                        </a>
                      </div>
                      <a href="product-details.html">
                        <img
                          src="assets/images/best-sellar/02.webp"
                          className="card-img-top"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div className="card-body">
                      <div className="product-info text-center">
                        <h6 className="mb-1 fw-bold product-name">
                          Product Name
                        </h6>
                        <div className="ratings mb-1 h6">
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                        </div>
                        <p className="mb-0 h6 fw-bold product-price">₹49</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className="position-relative overflow-hidden">
                      <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                        <a href="javascript:;">
                          <i className="bi bi-heart" />
                        </a>
                        <a href="javascript:;">
                          <i className="bi bi-basket3" />
                        </a>
                        <a
                          href="javascript:;"
                          data-bs-toggle="modal"
                          data-bs-target="#QuickViewModal"
                        >
                          <i className="bi bi-zoom-in" />
                        </a>
                      </div>
                      <a href="product-details.html">
                        <img
                          src="assets/images/best-sellar/03.webp"
                          className="card-img-top"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div className="card-body">
                      <div className="product-info text-center">
                        <h6 className="mb-1 fw-bold product-name">
                          Product Name
                        </h6>
                        <div className="ratings mb-1 h6">
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                        </div>
                        <p className="mb-0 h6 fw-bold product-price">₹49</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className="ribban bg-primary">New Fashion</div>
                    <div className="position-relative overflow-hidden">
                      <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                        <a href="javascript:;">
                          <i className="bi bi-heart" />
                        </a>
                        <a href="javascript:;">
                          <i className="bi bi-basket3" />
                        </a>
                        <a
                          href="javascript:;"
                          data-bs-toggle="modal"
                          data-bs-target="#QuickViewModal"
                        >
                          <i className="bi bi-zoom-in" />
                        </a>
                      </div>
                      <a href="product-details.html">
                        <img
                          src="assets/images/best-sellar/04.webp"
                          className="card-img-top"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div className="card-body">
                      <div className="product-info text-center">
                        <h6 className="mb-1 fw-bold product-name">
                          Product Name
                        </h6>
                        <div className="ratings mb-1 h6">
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                        </div>
                        <p className="mb-0 h6 fw-bold product-price">₹49</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className="position-relative overflow-hidden">
                      <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                        <a href="javascript:;">
                          <i className="bi bi-heart" />
                        </a>
                        <a href="javascript:;">
                          <i className="bi bi-basket3" />
                        </a>
                        <a
                          href="javascript:;"
                          data-bs-toggle="modal"
                          data-bs-target="#QuickViewModal"
                        >
                          <i className="bi bi-zoom-in" />
                        </a>
                      </div>
                      <a href="product-details.html">
                        <img
                          src="assets/images/best-sellar/05.webp"
                          className="card-img-top"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div className="card-body">
                      <div className="product-info text-center">
                        <h6 className="mb-1 fw-bold product-name">
                          Product Name
                        </h6>
                        <div className="ratings mb-1 h6">
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                        </div>
                        <p className="mb-0 h6 fw-bold product-price">₹49</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="trending-product">
              <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-5 g-4">
                <div className="col">
                  <div className="card">
                    <div className="position-relative overflow-hidden">
                      <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                        <a href="javascript:;">
                          <i className="bi bi-heart" />
                        </a>
                        <a href="javascript:;">
                          <i className="bi bi-basket3" />
                        </a>
                        <a
                          href="javascript:;"
                          data-bs-toggle="modal"
                          data-bs-target="#QuickViewModal"
                        >
                          <i className="bi bi-zoom-in" />
                        </a>
                      </div>
                      <a href="product-details.html">
                        <img
                          src="assets/images/trending-product/01.webp"
                          className="card-img-top"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div className="card-body">
                      <div className="product-info text-center">
                        <h6 className="mb-1 fw-bold product-name">
                          Product Name
                        </h6>
                        <div className="ratings mb-1 h6">
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                        </div>
                        <p className="mb-0 h6 fw-bold product-price">₹49</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className="position-relative overflow-hidden">
                      <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                        <a href="javascript:;">
                          <i className="bi bi-heart" />
                        </a>
                        <a href="javascript:;">
                          <i className="bi bi-basket3" />
                        </a>
                        <a
                          href="javascript:;"
                          data-bs-toggle="modal"
                          data-bs-target="#QuickViewModal"
                        >
                          <i className="bi bi-zoom-in" />
                        </a>
                      </div>
                      <a href="product-details.html">
                        <img
                          src="assets/images/trending-product/02.webp"
                          className="card-img-top"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div className="card-body">
                      <div className="product-info text-center">
                        <h6 className="mb-1 fw-bold product-name">
                          Product Name
                        </h6>
                        <div className="ratings mb-1 h6">
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                        </div>
                        <p className="mb-0 h6 fw-bold product-price">₹49</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className="ribban bg-warning text-dark">
                      New Season
                    </div>
                    <div className="position-relative overflow-hidden">
                      <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                        <a href="javascript:;">
                          <i className="bi bi-heart" />
                        </a>
                        <a href="javascript:;">
                          <i className="bi bi-basket3" />
                        </a>
                        <a
                          href="javascript:;"
                          data-bs-toggle="modal"
                          data-bs-target="#QuickViewModal"
                        >
                          <i className="bi bi-zoom-in" />
                        </a>
                      </div>
                      <a href="javascript:;">
                        <img
                          src="assets/images/trending-product/03.webp"
                          className="card-img-top"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div className="card-body">
                      <div className="product-info text-center">
                        <h6 className="mb-1 fw-bold product-name">
                          Product Name
                        </h6>
                        <div className="ratings mb-1 h6">
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                        </div>
                        <p className="mb-0 h6 fw-bold product-price">₹49</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className="position-relative overflow-hidden">
                      <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                        <a href="javascript:;">
                          <i className="bi bi-heart" />
                        </a>
                        <a href="javascript:;">
                          <i className="bi bi-basket3" />
                        </a>
                        <a
                          href="javascript:;"
                          data-bs-toggle="modal"
                          data-bs-target="#QuickViewModal"
                        >
                          <i className="bi bi-zoom-in" />
                        </a>
                      </div>
                      <a href="product-details.html">
                        <img
                          src="assets/images/trending-product/04.webp"
                          className="card-img-top"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div className="card-body">
                      <div className="product-info text-center">
                        <h6 className="mb-1 fw-bold product-name">
                          Product Name
                        </h6>
                        <div className="ratings mb-1 h6">
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                        </div>
                        <p className="mb-0 h6 fw-bold product-price">₹49</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className="position-relative overflow-hidden">
                      <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                        <a href="javascript:;">
                          <i className="bi bi-heart" />
                        </a>
                        <a href="javascript:;">
                          <i className="bi bi-basket3" />
                        </a>
                        <a
                          href="javascript:;"
                          data-bs-toggle="modal"
                          data-bs-target="#QuickViewModal"
                        >
                          <i className="bi bi-zoom-in" />
                        </a>
                      </div>
                      <a href="product-details.html">
                        <img
                          src="assets/images/trending-product/05.webp"
                          className="card-img-top"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div className="card-body">
                      <div className="product-info text-center">
                        <h6 className="mb-1 fw-bold product-name">
                          Product Name
                        </h6>
                        <div className="ratings mb-1 h6">
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                        </div>
                        <p className="mb-0 h6 fw-bold product-price">₹49</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="special-offer">
              <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-5 g-4">
                <div className="col">
                  <div className="card">
                    <div className="position-relative overflow-hidden">
                      <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                        <a href="javascript:;">
                          <i className="bi bi-heart" />
                        </a>
                        <a href="javascript:;">
                          <i className="bi bi-basket3" />
                        </a>
                        <a
                          href="javascript:;"
                          data-bs-toggle="modal"
                          data-bs-target="#QuickViewModal"
                        >
                          <i className="bi bi-zoom-in" />
                        </a>
                      </div>
                      <a href="product-details.html">
                        <img
                          src="assets/images/special-offer/01.webp"
                          className="card-img-top"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div className="card-body">
                      <div className="product-info text-center">
                        <h6 className="mb-1 fw-bold product-name">
                          Product Name
                        </h6>
                        <div className="ratings mb-1 h6">
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                        </div>
                        <p className="mb-0 h6 fw-bold product-price">₹49</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className="position-relative overflow-hidden">
                      <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                        <a href="javascript:;">
                          <i className="bi bi-heart" />
                        </a>
                        <a href="javascript:;">
                          <i className="bi bi-basket3" />
                        </a>
                        <a
                          href="javascript:;"
                          data-bs-toggle="modal"
                          data-bs-target="#QuickViewModal"
                        >
                          <i className="bi bi-zoom-in" />
                        </a>
                      </div>
                      <a href="product-details.html">
                        <img
                          src="assets/images/special-offer/02.webp"
                          className="card-img-top"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div className="card-body">
                      <div className="product-info text-center">
                        <h6 className="mb-1 fw-bold product-name">
                          Product Name
                        </h6>
                        <div className="ratings mb-1 h6">
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                        </div>
                        <p className="mb-0 h6 fw-bold product-price">₹49</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className="ribban">50% Discount</div>
                    <div className="position-relative overflow-hidden">
                      <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                        <a href="javascript:;">
                          <i className="bi bi-heart" />
                        </a>
                        <a href="javascript:;">
                          <i className="bi bi-basket3" />
                        </a>
                        <a
                          href="javascript:;"
                          data-bs-toggle="modal"
                          data-bs-target="#QuickViewModal"
                        >
                          <i className="bi bi-zoom-in" />
                        </a>
                      </div>
                      <a href="product-details.html">
                        <img
                          src="assets/images/special-offer/03.webp"
                          className="card-img-top"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div className="card-body">
                      <div className="product-info text-center">
                        <h6 className="mb-1 fw-bold product-name">
                          Product Name
                        </h6>
                        <div className="ratings mb-1 h6">
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                        </div>
                        <p className="mb-0 h6 fw-bold product-price">₹49</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className="position-relative overflow-hidden">
                      <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                        <a href="javascript:;">
                          <i className="bi bi-heart" />
                        </a>
                        <a href="javascript:;">
                          <i className="bi bi-basket3" />
                        </a>
                        <a
                          href="javascript:;"
                          data-bs-toggle="modal"
                          data-bs-target="#QuickViewModal"
                        >
                          <i className="bi bi-zoom-in" />
                        </a>
                      </div>
                      <a href="product-details.html">
                        <img
                          src="assets/images/special-offer/04.webp"
                          className="card-img-top"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div className="card-body">
                      <div className="product-info text-center">
                        <h6 className="mb-1 fw-bold product-name">
                          Product Name
                        </h6>
                        <div className="ratings mb-1 h6">
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                        </div>
                        <p className="mb-0 h6 fw-bold product-price">₹49</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className="position-relative overflow-hidden">
                      <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                        <a href="javascript:;">
                          <i className="bi bi-heart" />
                        </a>
                        <a href="javascript:;">
                          <i className="bi bi-basket3" />
                        </a>
                        <a
                          href="javascript:;"
                          data-bs-toggle="modal"
                          data-bs-target="#QuickViewModal"
                        >
                          <i className="bi bi-zoom-in" />
                        </a>
                      </div>
                      <a href="product-details.html">
                        <img
                          src="assets/images/special-offer/05.webp"
                          className="card-img-top"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div className="card-body">
                      <div className="product-info text-center">
                        <h6 className="mb-1 fw-bold product-name">
                          Product Name
                        </h6>
                        <div className="ratings mb-1 h6">
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                          <i className="bi bi-star-fill text-warning" />
                        </div>
                        <p className="mb-0 h6 fw-bold product-price">₹49</p>
                      </div>
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

export default LatestProduct
