import { Form, Formik } from "formik";
import React from "react";
import { useState } from "react";

import * as Yup from "yup";
import { useEffect } from "react";
import PaymentForm from "./PaymentForm";

function CheckoutForm({ user, submitOrder, initialValues, processingOrder }) {
  const [create_account, setCreate_account] = useState(false);
  console.log("USER", initialValues);
  const [customData, setCustomData] = useState({
    customer: {
      name: user && user.name,
      phone: user && user.phone,
      email: "",
      customer: "",
    },
    payment_method: "ONLINE",
  });

  return (
    <>
      {customData && (
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object({
            customer: Yup.object().shape({
              name: Yup.string().required("Required"),
              phone: Yup.string().required("Required"),
              email: Yup.string().required("Required"),
            }),
          })}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            await submitOrder(values);
            resetForm();
            setSubmitting(false);
          }}
        >
          {(formik) => {
            console.log(formik);
            return (
              <Form>
                <PaymentForm
                  formik={formik}
                  processingOrder={processingOrder}
                />
              </Form>
            );
          }}
        </Formik>
      )}
    </>
  );
}

export default CheckoutForm;
