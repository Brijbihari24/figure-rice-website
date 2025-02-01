import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLogoutUser } from "../../shared/hooks/UseAuth";
function AccountSidebar({ active }) {
  const [logout] = useLogoutUser();
  return (
    <nav className="navbar navbar-expand-xl flex-wrap p-0">
      <div
        className="offcanvas offcanvas-start"
        tabIndex={-1}
        id="offcanvasNavbarFilter"
        aria-labelledby="offcanvasNavbarFilterLabel"
      >
        <div className="offcanvas-header">
          <h5
            className="offcanvas-title mb-0 fw-bold text-uppercase"
            id="offcanvasNavbarFilterLabel"
          >
            Account
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body account-menu">
          <div className="list-group w-100 rounded-0">
            <Link
              to="/my-account"
              className={
                active === "DASHBOARD"
                  ? "list-group-item active"
                  : "list-group-item "
              }
            >
              <i className="bi bi-house-door me-2" />
              Dashboard
            </Link>
            <Link
              to="/our-orders"
              className={
                active === "ORDERS"
                  ? "list-group-item active"
                  : "list-group-item "
              }
            >
              <i className="bi bi-basket3 me-2" />
              Orders
            </Link>
            <Link
              to="/our-profile"
              className={
                active === "PROFILE"
                  ? "list-group-item active"
                  : "list-group-item "
              }
            >
              <i className="bi bi-person me-2" />
              Profile
            </Link>
            <Link
              to="/edit-profile"
              className={
                active === "EDITPROFILE"
                  ? "list-group-item active"
                  : "list-group-item "
              }
            >
              <i className="bi bi-pencil me-2" />
              Edit Profile
            </Link>
            {/* <Link
              to="/saved-address"
              className={
                active === "SAVEDADDRESS"
                  ? "list-group-item active"
                  : "list-group-item "
              }
            >
              <i className="bi bi-pin-map me-2" />
              Saved Address
            </Link> */}
            <Link
              to="our-wishlist"
              className={
                active === "WISHLIST"
                  ? "list-group-item active"
                  : "list-group-item "
              }
            >
              <i className="bi bi-suit-heart me-2" />
              Wishlist
            </Link>
            <a onClick={() => logout()} className="list-group-item">
              <i className="bi bi-power me-2" />
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default AccountSidebar;
