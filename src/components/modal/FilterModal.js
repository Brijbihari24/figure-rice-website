import React from 'react'

function FilterModal() {
  return (
    <div className="modal" id="FilterOrders" tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content rounded-0">
          <div className="modal-header">
            <h5 className="modal-title fw-bold">Filter Orders</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <h6 className="mb-3 fw-bold">Status</h6>
            <div className="status-radio d-flex flex-column gap-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  All
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  On the way
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault3">
                  Delivered
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault4"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault4">
                  Cancelled
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault5"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault5">
                  Returned
                </label>
              </div>
            </div>
            <hr />
            <h6 className="mb-3 fw-bold">Time</h6>
            <div className="status-radio d-flex flex-column gap-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioTime"
                  id="flexRadioDefault6"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="flexRadioDefault6">
                  Anytime
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioTime"
                  id="flexRadioDefault7"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault7">
                  Last 30 days
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioTime"
                  id="flexRadioDefault8"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault8">
                  Last 6 months
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioTime"
                  id="flexRadioDefault9"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault9">
                  Last year
                </label>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <div className="d-flex align-items-center gap-3 w-100">
              <button
                type="button"
                className="btn btn-outline-dark btn-ecomm w-50"
              >
                Clear Filters
              </button>
              <button type="button" className="btn btn-dark btn-ecomm w-50">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterModal
