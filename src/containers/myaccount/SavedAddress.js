import React from 'react'
import AccountSidebar from '../../components/account/AccountSidebar'
import Breadcrum from '../../components/breadcrum/Breadcrum'
import Footer from '../../components/common/footer/Footer'
import Header from '../../components/common/header/Header'
import AddressModal from '../../components/modal/AddressModal'
import FilterModal from '../../components/modal/FilterModal'

function SavedAddress() {
  return (
    <>
      <Header />
      <div className="page-content">
        <Breadcrum title={'Saved Address'} />
        <section className="section-padding">
          <div className="container">
            <div className="d-flex align-items-center px-3 py-2 border mb-4">
              <div className="text-start">
                <h4 className="mb-0 h4 fw-bold">Account - Addresses</h4>
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
                <AccountSidebar active={'SAVEDADDRESS'} />
              </div>
              <div className="col-12 col-xl-9">
                <div className="card rounded-0">
                  <div className="card-header bg-light">
                    <div className="d-flex align-items-center">
                      <div className="flex-grow-1">
                        <h5 className="fw-bold mb-0">Saved Address</h5>
                      </div>
                      <div className>
                        <button
                          type="button"
                          className="btn btn-ecomm"
                          data-bs-toggle="modal"
                          data-bs-target="#NewAddress"
                        >
                          <i className="bi bi-plus-lg me-2" />
                          Add New Address
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <h6 className="fw-bold mb-3 py-2 px-3 bg-light">
                      Default Address
                    </h6>
                    <div className="card rounded-0 mb-3">
                      <div className="card-body">
                        <div className="d-flex flex-column flex-xl-row gap-3">
                          <div className="address-info form-check flex-grow-1">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefaultAddress"
                              id="flexRadioDefaultAddress1"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefaultAddress1"
                            >
                              <span className="fw-bold mb-0 h5">
                                Jhon Maxwell
                              </span>
                              <br />
                              47-A, US Road, New York <br />
                              United Kingdom, 201001
                              <br />
                              Mobile:{' '}
                              <span className="text-dark fw-bold">
                                +91-xxxxxxxxxx
                              </span>
                            </label>
                          </div>
                          <div className="d-none d-xl-block vr" />
                          <div className="d-grid gap-2 align-self-start align-self-xl-center">
                            <button
                              type="button"
                              className="btn btn-outline-dark px-5 btn-ecomm"
                            >
                              Remove
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-dark px-5 btn-ecomm"
                              data-bs-toggle="modal"
                              data-bs-target="#EditAddress"
                            >
                              Edit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h6 className="fw-bold mb-3 py-2 px-3 bg-light">
                      Other Address
                    </h6>
                    <div className="card rounded-0 mb-3">
                      <div className="card-body">
                        <div className="d-flex flex-column flex-xl-row gap-3">
                          <div className="address-info form-check flex-grow-1">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefaultAddress"
                              id="flexRadioDefaultAddress2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefaultAddress2"
                            >
                              <span className="fw-bold mb-0 h5">
                                Andrew Clark
                              </span>
                              <br />
                              85-B, UAE Road, Dubai <br />
                              Saudi Arabia, 201001
                              <br />
                              Mobile:{' '}
                              <span className="text-dark fw-bold">
                                +99-xxxxxxxxxx
                              </span>
                            </label>
                          </div>
                          <div className="d-none d-xl-block vr" />
                          <div className="d-grid gap-2 align-self-start align-self-xl-center">
                            <button
                              type="button"
                              className="btn btn-outline-dark px-5 btn-ecomm"
                            >
                              Remove
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-dark px-5 btn-ecomm"
                              data-bs-toggle="modal"
                              data-bs-target="#EditAddress"
                            >
                              Edit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card rounded-0">
                      <div className="card-body">
                        <button
                          type="button"
                          className="btn btn-outline-dark btn-ecomm"
                          data-bs-toggle="modal"
                          data-bs-target="#NewAddress"
                        >
                          Add New Address
                        </button>
                      </div>
                    </div>
                    <div className="contact-details  mt-4">
                      <div className>
                        <h6 className="fw-bold mb-3">Contact Details</h6>
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control rounded-0"
                            id="floatingName2"
                            placeholder="Name"
                            defaultValue="Jhon Deo"
                          />
                          <label htmlFor="floatingName2">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control rounded-0"
                            id="floatingMobileNo2"
                            placeholder="Mobile No"
                            defaultValue="99-xxxxxxxxxx"
                          />
                          <label htmlFor="floatingMobileNo2">Mobile No</label>
                        </div>
                      </div>
                      <div className="mt-4">
                        <h6 className="fw-bold mb-3">Address</h6>
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control rounded-0"
                            id="floatingPinCode2"
                            placeholder="Pin Code"
                            defaultValue={201001}
                          />
                          <label htmlFor="floatingPinCode2">Pin Code</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control rounded-0"
                            id="floatingAddress2"
                            placeholder="Address (House No, Building, Street, Area)"
                            defaultValue="85-B, UAE Road"
                          />
                          <label htmlFor="floatingAddress2">Address</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control rounded-0"
                            id="floatingLocalityTown2"
                            placeholder="Locality/Town"
                            defaultValue="Street Name"
                          />
                          <label htmlFor="floatingLocalityTown2">
                            Locality / Town
                          </label>
                        </div>
                        <div className="row">
                          <div className="col">
                            <div className="form-floating">
                              <input
                                type="text"
                                className="form-control rounded-0"
                                id="floatingCity2"
                                placeholder="City / District"
                                defaultValue="Dubai"
                              />
                              <label htmlFor="floatingAddress2">
                                City / District
                              </label>
                            </div>
                          </div>
                          <div className="col">
                            <div className="form-floating">
                              <input
                                type="text"
                                className="form-control rounded-0"
                                id="floatingState2"
                                placeholder="State"
                                defaultValue="United Arabia"
                              />
                              <label htmlFor="floatingState2">State</label>
                            </div>
                          </div>
                          <div className="saved-add-address">
                            <button
                              type="button"
                              className="btn btn-outline-dark btn-ecomm"
                            >
                              Saved Address
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end row*/}
          </div>
        </section>
      </div>
      <Footer />
      {/* filter Modal */}
      <FilterModal />
      <AddressModal />
    </>
  )
}

export default SavedAddress
