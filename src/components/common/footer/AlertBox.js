import React from 'react'
import { connect } from 'react-redux'
import { removeAlert } from '../../../store/actions/alert'
const AlertBox = ({ alert, removeAlert }) => {
  return (
    <div>
      {alert.map((item, index) => {
        return (
          <div className="alert-box" key={`alert-${index}`}>
            <div className="alert-container">
              <div
                className={`alert alert-${item.alertType} alert-dismissible alert-label-icon label-arrow show`}
                role="alert"
              >
                <h1 className="alert-heading">
                  <i
                    class={
                      item.alertType === 'success'
                        ? 'fa fa-check-circle label-icon'
                        : 'fa fa-ban label-icon'
                    }
                  ></i>
                </h1>
                <h3 className="text-center">
                  {item.alertType === 'success' ? 'Success' : 'FAILED'}
                </h3>
                <p className="text-center"> {item.msg} </p>
                <hr />
                <div className="text-center">
                  <button
                    type="button"
                    className={
                      item.alertType === 'success'
                        ? `btn btn-success`
                        : 'btn btn-danger'
                    }
                    data-bs-dismiss="alert"
                    aria-label="Close"
                    onClick={() => removeAlert(item.id)}
                  >
                    <i className="fa fa-close"></i> Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

const mapStateToProps = (state) => ({ alert: state.alert })

const mapDispatchToProps = { removeAlert }

export default connect(mapStateToProps, mapDispatchToProps)(AlertBox)
