import React from "react";
import { Link } from "react-router-dom";
import AccountSidebar from "../../components/account/AccountSidebar";
import Breadcrum from "../../components/breadcrum/Breadcrum";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/Header";
import { useProfileAuth } from "../../shared/hooks/UseAuth";

function MyAccount() {
  const [user, isAuthenticated] = useProfileAuth();
  return (
    <div>
      <Header />
      <div className="page-content">
        <Breadcrum title={"My Account"} />
        <section className="section-padding">
          <div className="container">
            <div className="d-flex align-items-center px-3 py-2 border mb-4">
              <div className="text-start">
                <h4 className="mb-0 h4 fw-bold">Account - Dashboard</h4>
              </div>
            </div>
            <div
              className="btn btn-dark btn-ecomm d-xl-none position-fixed top-50 start-0 translate-middle-y"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbarFilter"
            >
              <span>
                <i className="bi bi-person me-2" />
                Account
              </span>
            </div>
            <div className="row">
              <div className="col-12 col-xl-3 filter-column">
                <AccountSidebar active={"DASHBOARD"} />
              </div>
              <div className="col-12 col-xl-9">
                <div className="card rounded-0 bg-light">
                  <div className="card-body">
                    <div className="d-flex flex-wrap flex-row align-items-center gap-3">
                      <div className="profile-pic"></div>
                      <div className="profile-email flex-grow-1">
                        <p className="mb-0 fw-bold text-content">
                          {user && `Welcome Back ${user.name}`}
                        </p>
                      </div>
                      <div className="edit-button align-self-start">
                        <Link
                          to="/edit-profile"
                          className="btn btn-outline-dark btn-ecomm"
                        >
                          <i className="bi bi-pencil-fill me-2" />
                          Edit Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row row-cols-1 row-cols-lg-3 g-4 pt-4">
                  <div className="col">
                    <Link to="/our-orders">
                      <div className="card rounded-0">
                        <div className="card-body p-5">
                          <div className="text-center">
                            <div className="fs-2 mb-3 text-content">
                              <i className="bi bi-box-seam" />
                            </div>
                            <h6 className="mb-0">Orders</h6>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col">
                    <Link to="/our-wishlist">
                      <div className="card rounded-0">
                        <div className="card-body p-5">
                          <div className="text-center">
                            <div className="fs-2 mb-3 text-content">
                              <i className="bi bi-suit-heart" />
                            </div>
                            <h6 className="mb-0">Wishlist</h6>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  {/* <div className="col">
                    <a href="account-orders.html">
                      <div className="card rounded-0">
                        <div className="card-body p-5">
                          <div className="text-center">
                            <div className="fs-2 mb-3 text-content">
                              <i className="bi bi-arrow-clockwise" />
                            </div>
                            <h6 className="mb-0">Returns</h6>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div> */}
                  <div className="col">
                    <Link to="/saved-address">
                      <div className="card rounded-0">
                        <div className="card-body p-5">
                          <div className="text-center">
                            <div className="fs-2 mb-3 text-content">
                              <i className="bi bi-geo-alt" />
                            </div>
                            <h6 className="mb-0">Addresses</h6>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  {/* <div className="col">
                    <a href="javascript:;">
                      <div className="card rounded-0">
                        <div className="card-body p-5">
                          <div className="text-center">
                            <div className="fs-2 mb-3 text-content">
                              <i className="bi bi-bookmarks" />
                            </div>
                            <h6 className="mb-0">Coupons</h6>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div> */}
                  <div className="col">
                    <Link to="/our-profile">
                      <div className="card rounded-0">
                        <div className="card-body p-5">
                          <div className="text-center">
                            <div className="fs-2 mb-3 text-content">
                              <i className="bi bi-person" />
                            </div>
                            <h6 className="mb-0">Profile Details</h6>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                {/*end row*/}
              </div>
            </div>
            {/*end row*/}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default MyAccount;
