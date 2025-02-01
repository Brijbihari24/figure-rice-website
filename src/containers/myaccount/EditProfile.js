import React from "react";
import AccountSidebar from "../../components/account/AccountSidebar";
import Breadcrum from "../../components/breadcrum/Breadcrum";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/Header";
import { Formik, Form } from "formik";
import { TextArea, TextInput } from "../../components/Form/Form";
import * as Yup from "yup";
import { useProfileAuth, useUpdateUser } from "../../shared/hooks/UseAuth";
import { useHistory } from "react-router-dom";
function EditProfile() {
  const [user, isAuthenticated, loading] = useProfileAuth();
  const [updateUser] = useUpdateUser();
  const history = useHistory();
  return (
    <div>
      <Header />
      <div className="page-content">
        <Breadcrum title={"Edit Profile"} />
        {user && (
          <section className="section-padding">
            <Formik
              initialValues={{
                name: user.name,
                phone: user.phone,
                email: user.email,
              }}
              validationSchema={Yup.object({
                name: Yup.string().required("Required"),
                phone: Yup.string().required("Required"),
                email: Yup.string().required("Required"),
              })}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                await updateUser(values);
                history.push("/our-profile");
                resetForm();
                setSubmitting(false);
              }}
            >
              {(formik) => {
                console.log(formik);
                return (
                  <Form>
                    <div className="container">
                      <div className="d-flex align-items-center px-3 py-2 border mb-4">
                        <div className="text-start">
                          <h4 className="mb-0 h4 fw-bold">
                            Account - Edit Profile
                          </h4>
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
                          <AccountSidebar active={"EDITPROFILE"} />
                        </div>
                        <div className="col-12 col-xl-7">
                          <div className="card rounded-0">
                            <div className="card-body p-lg-5">
                              <h5 className="mb-0 fw-bold">Edit Details</h5>
                              <hr />

                              <div className="row row-cols-1 g-3">
                                <div className="col">
                                  <div className="form-floating">
                                    <TextInput
                                      name="name"
                                      placeholder="Name"
                                      type="text"
                                      className="form-control rounded-0"
                                    />
                                  </div>
                                </div>
                                <div className="col">
                                  <div className="form-floating">
                                    <TextInput
                                      name="phone"
                                      placeholder="Mobile Number"
                                      type="phone"
                                      className="form-control rounded-0"
                                    />
                                  </div>
                                </div>
                                <div className="col">
                                  <div className="form-floating">
                                    <TextInput
                                      name="email"
                                      placeholder="Email Address"
                                      type="email"
                                      className="form-control rounded-0"
                                      disabled
                                    />
                                  </div>
                                </div>

                                <div className="col">
                                  <button
                                    type="submit"
                                    className="btn btn-dark py-3 btn-ecomm w-100"
                                  >
                                    Save Details
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*end row*/}
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </section>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default EditProfile;
