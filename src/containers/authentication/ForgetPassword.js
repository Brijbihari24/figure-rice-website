import React from "react";
import Breadcrum from "../../components/breadcrum/Breadcrum";
import Header from "../../components/common/header/Header";
import Footer from "../../components/common/footer/Footer";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { TextInput } from "../../components/Form/Form";
import { useForgetPassword } from "../../shared/hooks/UseAuth";

function ForgetPassword() {
  const [forgetPassword] = useForgetPassword();
  return (
    <div>
      <Header />
      <div className="page-content">
        <Breadcrum title={"Sign In"} />
        <section className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 col-xl-5 col-xxl-4 mx-auto">
                <div className="card rounded-0">
                  <div className="card-body p-4">
                    <h4 className="mb-0 fw-bold text-center">User Login</h4>
                    <hr />

                    <Formik
                      initialValues={{
                        email: "",
                      }}
                      validationSchema={Yup.object({
                        email: Yup.string().required("Required"),
                      })}
                      onSubmit={async (
                        values,
                        { setSubmitting, resetForm }
                      ) => {
                        setSubmitting(true);
                        await forgetPassword(values);
                        resetForm();
                        setSubmitting(false);
                      }}
                    >
                      {(formik) => {
                        console.log(formik);
                        return (
                          <Form>
                            <div className="row g-4">
                              <div className="col-12">
                                <TextInput
                                  label="Email"
                                  name="email"
                                  type="text"
                                />
                              </div>

                              <div className="col-12">
                                <button
                                  type="submit"
                                  className="btn btn-dark rounded-0 btn-ecomm w-100"
                                >
                                  Verify Email
                                </button>
                              </div>
                              <div className="col-12 text-center">
                                <p className="mb-0 rounded-0 w-100">
                                  Don't have an account?{" "}
                                  <Link to="/sign-up" className="text-danger">
                                    Sign Up
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </Form>
                        );
                      }}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
            {/*end row*/}
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default ForgetPassword;
