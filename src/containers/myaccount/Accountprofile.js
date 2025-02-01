import React from "react";
import { Link } from "react-router-dom";
import AccountSidebar from "../../components/account/AccountSidebar";
import Breadcrum from "../../components/breadcrum/Breadcrum";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/Header";
import { useProfileAuth } from "../../shared/hooks/UseAuth";

function Accountprofile() {
  const [user, isAuthenticated, loading] = useProfileAuth();
  return (
    <div>
      <Header />
      <div className="page-content">
        <Breadcrum title={"Account Profile"} />
        <section className="section-padding">
          <div className="container">
            <div className="d-flex align-items-center px-3 py-2 border mb-4">
              <div className="text-start">
                <h4 className="mb-0 h4 fw-bold">Account - Profile</h4>
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
                <AccountSidebar active={"PROFILE"} />
              </div>
              {user && (
                <div className="col-12 col-xl-9">
                  <div className="card rounded-0">
                    <div className="card-body p-lg-5">
                      <h5 className="mb-0 fw-bold">Profile Details</h5>
                      <hr />
                      <div className="table-responsive">
                        <table className="table table-striped">
                          <tbody>
                            <tr>
                              <td>Full Name</td>
                              <td> {user.name} </td>
                            </tr>
                            <tr>
                              <td>Mobile Number</td>
                              <td> {user.phone} </td>
                            </tr>
                            <tr>
                              <td>Email ID</td>
                              <td>{user.email}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className>
                        <Link
                          to={"/edit-profile"}
                          type="button"
                          className="btn btn-outline-dark btn-ecomm px-5"
                        >
                          <i className="bi bi-pencil me-2" />
                          Edit
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/*end row*/}
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default Accountprofile;
