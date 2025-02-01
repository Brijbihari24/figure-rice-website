import React from "react";
import { SelectBox, TextInput } from "../../components/Form/Form";
import { useGetCart } from "../../shared/hooks/UseCart";

function PaymentForm({ formik, processingOrder }) {
  const [cart, total] = useGetCart();
  return (
    <div className="container">
      <div className="d-flex align-items-center px-3 py-2 border mb-4">
        <div className="text-start">
          <h4 className="mb-0 h4 fw-bold">Billing Details</h4>
        </div>
      </div>
      <div className="row g-4">
        <div className="col-12 col-lg-8 col-xl-8">
          <h6 className="fw-bold mb-3 py-2 px-3 bg-light">Personal Details</h6>
          <div className="card rounded-0 mb-3">
            <div className="card-body">
              <div className="row g-3">
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <div className="form-floating">
                      <TextInput
                        name="customer.name"
                        className="form-control rounded-0"
                        placeholder="Customer Name"
                      />
                    </div>
                  </div>

                  <div className="col-12 col-lg-6">
                    <div className="form-floating">
                      <TextInput
                        name="customer.email"
                        placeholder="Email"
                        type="email"
                        className="form-control rounded-0"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="form-floating">
                      <TextInput
                        name="customer.phone"
                        placeholder="Phone"
                        className="form-control rounded-0"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/*end row*/}
            </div>
          </div>
          <h6 className="fw-bold mb-3 py-2 px-3 bg-light mb-3">
            Shipping Details
          </h6>
          <div className="card rounded-0">
            <div className="card-body">
              <div className="row g-3">
                <div className="col-12 col-lg-12">
                  <div className="form-floating">
                    <TextInput
                      name="address.address_1"
                      placeholder="Address 1"
                      className="form-control rounded-0"
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="form-floating">
                    <TextInput
                      name="address.address_2"
                      placeholder="Address 2"
                      className="form-control rounded-0"
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="form-floating">
                    <TextInput
                      name="address.landmark"
                      placeholder="Landmark"
                      className="form-control rounded-0"
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="form-floating">
                    <TextInput
                      name="address.city"
                      placeholder="City"
                      className="form-control rounded-0"
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="form-floating">
                    <TextInput
                      name="address.pin"
                      placeholder="Pincode"
                      className="form-control rounded-0"
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <SelectBox
                    label="State"
                    name="address.state"
                    placeholder="State"
                    className="form-control rounded-0"
                  >
                    <option value=""></option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Andaman and Nicobar Islands">
                      Andaman and Nicobar Islands
                    </option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Dadar and Nagar Haveli">
                      Dadar and Nagar Haveli
                    </option>
                    <option value="Daman and Diu">Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                  </SelectBox>
                </div>
              </div>
              {/*end row*/}
            </div>
          </div>
          <h6 className="fw-bold mb-3 py-2 px-3 bg-light mb-3 ">
            Payment Options
          </h6>
          <div className="card rounded-0">
            <div className="card-body">
              <div className="panel-default">
                <label className="checkbox-default" htmlFor="currencyCod">
                  <input
                    type="checkbox"
                    id="currencyCod"
                    checked={
                      formik.values && formik.values.payment_method == "COD"
                    }
                    onChange={(e) => {
                      if (e.target.checked) {
                        formik.setFieldValue("payment_method", "COD");
                      }
                    }}
                  />
                  <span>Cash on Delivery</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-xl-4">
          <div className="card rounded-0 mb-3">
            <div className="card-body">
              <h5 className="fw-bold mb-4">Order Summary</h5>
              <div className="hstack align-items-center justify-content-between">
                <p className="mb-0">Bag Total</p>
                <p className="mb-0">₹{total}</p>
              </div>
              <hr />
              {/* <div className="hstack align-items-center justify-content-between">
              <p className="mb-0">Bag discount</p>
              <p className="mb-0 text-success">- ₹178.00</p>
            </div>
            <hr /> */}
              <div className="hstack align-items-center justify-content-between">
                <p className="mb-0">Delivery</p>
                <p className="mb-0">₹0.00</p>
              </div>
              <hr />
              <div className="hstack align-items-center justify-content-between fw-bold text-content">
                <p className="mb-0">Total Amount</p>
                <p className="mb-0">₹{total}</p>
              </div>
              <div className="d-grid mt-4">
                <button
                  type="submit"
                  className="btn btn-dark btn-ecomm py-3 px-5"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*end row*/}
    </div>
  );
}

export default PaymentForm;
