import { Form, Formik } from "formik";
import React from "react";
import { useState } from "react";
import * as Yup from "yup";
import { useEffect } from "react";
import PaymentForm from "./PaymentForm";

function CheckoutFormUser({ user, submitOrder, initialValues }) {
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
          initialValues={
            initialValues
            //     {
            //     customer: {
            //       name: user ? user.name : "",
            //       phone: "",
            //       email: "",
            //       customer: "",
            //     },
            //     // order_date: new Date(),
            //     // status: "PENDING",
            //     // is_paid: false,
            //     // payment_method: "ONLINE",
            //     // total_amount: "",
            //     // sub_total: "",
            //     // tax: "",
            //     // discount: "",
            //     // delivery_charges: "",
            //     // address: {
            //     //   address_1: "",
            //     //   address_2: "",
            //     //   city: "",
            //     //   state: "",
            //     //   pin: "",
            //     //   landmark: "",
            //     // },
            //     // customer: {
            //     //   name: "",
            //     //   phone: "",
            //     //   email: "",
            //     //   customer: "",
            //     // },
            //     // products: [
            //     //   {
            //     //     product: "",
            //     //     name: "",
            //     //     slug: "",
            //     //     regular_price: "",
            //     //     sale_price: "",
            //     //     image: "",
            //     //     quantity: "",
            //     //   },
            //     // ],
            //     name: "",
            //   }
          }
          validationSchema={Yup.object({
            // name: Yup.string().required("Required"),
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
                <PaymentForm formik={formik} />
              </Form>
            );
          }}
        </Formik>
      )}
    </>
  );
}

export default CheckoutFormUser;
