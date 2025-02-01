import React from 'react'

function AddressModal() {
  return (
    <div className="modal" id="EditAddress" tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content rounded-0">
          <div className="modal-header">
            <h5 className="modal-title fw-bold">Edit Address</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
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
                <label htmlFor="floatingLocalityTown2">Locality / Town</label>
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
                    <label htmlFor="floatingAddress2">City / District</label>
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
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <div className="d-grid w-100">
              <button
                type="button"
                className="btn btn-dark py-3 px-5 btn-ecomm"
              >
                Save Address
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddressModal
