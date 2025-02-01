import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookAppointmentButton from "../BookAppointmentButton";
import { useSelectAllCollection } from "../../../shared/hooks/UseCollection"
import { URI } from '../../../domain/constant';
import { useSelectAllService } from "../../../shared/hooks/UseService";

import { useGetWebpage } from '../../../shared/hooks/UseWebpage'

function Header({ match }) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location.href]);

  const [header, setHeader] = useState("main-header header-two text-white");

  const listenScrollEvent = event => {
    if (window.scrollY < 73) {
      return setHeader("main-header header-two text-white");
    } else if (window.scrollY > 70) {
      return setHeader("main-header header-two text-white fixed-header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  const [collection_data] = useSelectAllCollection();
  const { all_collections, all_collections_loading } = collection_data;

  console.log("All services -", all_collections);

  const [openMenu, setOpenMenu] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false)

  const [mobileNav, setMobileNav] = useState(false)
  const [mobilemenu, setmobilemenu] = useState(false)

  const [webpage_data] = useGetWebpage()
  const { webpages, loading } = webpage_data;

  console.log("Webpages -", webpages);

  const [openModel, setOpenModel] = useState(false)

  return (
    <div>

      <header>
        <div className="container-lg">
          <div className="row py-3 border-bottom">
            <div className="col-sm-4 col-lg-2 text-center text-sm-start d-flex gap-3 justify-content-center justify-content-md-start">
              <div className="d-flex align-items-center my-3 my-sm-0">
                <a href="index.html">
                  <img width={100} src="/assets/images/logo.png" alt="logo" className="img-fluid" />
                </a>
              </div>
              <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <svg width={24} height={24} viewBox="0 0 24 24"><use xlinkHref="#menu" /></svg>
              </button>
            </div>
            <div className="col-sm-6 offset-sm-2 offset-md-0 col-lg-4">
              <div className="search-bar row bg-light p-2 rounded-4">
                <div className="col-md-4 d-none d-md-block">
                  <select className="form-select border-0 bg-transparent">
                    <option>All Categories</option>
                    <option>Groceries</option>
                    <option>Drinks</option>
                    <option>Chocolates</option>
                  </select>
                </div>
                <div className="col-11 col-md-7">
                  <form id="search-form" className="text-center" action="index.html" method="post">
                    <input type="text" className="form-control border-0 bg-transparent" placeholder="Search for more than 20,000 products" />
                  </form>
                </div>
                <div className="col-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z" /></svg>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <ul className="navbar-nav list-unstyled d-flex flex-row gap-3 gap-lg-5 justify-content-center flex-wrap align-items-center mb-0 fw-bold text-uppercase text-dark">
                <li className="nav-item active">
                  <a href="index.html" className="nav-link">Home</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle pe-3" role="button" id="pages" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
                  <ul className="dropdown-menu border-0 p-3 rounded-0 shadow" aria-labelledby="pages">
                    <li><a href="index.html" className="dropdown-item">About Us </a></li>
                    <li><a href="index.html" className="dropdown-item">Shop </a></li>
                    <li><a href="index.html" className="dropdown-item">Single Product </a></li>
                    <li><a href="index.html" className="dropdown-item">Cart </a></li>
                    <li><a href="index.html" className="dropdown-item">Checkout </a></li>
                    <li><a href="index.html" className="dropdown-item">Blog </a></li>
                    <li><a href="index.html" className="dropdown-item">Single Post </a></li>
                    <li><a href="index.html" className="dropdown-item">Styles </a></li>
                    <li><a href="index.html" className="dropdown-item">Contact </a></li>
                    <li><a href="index.html" className="dropdown-item">Thank You </a></li>
                    <li><a href="index.html" className="dropdown-item">My Account </a></li>
                    <li><a href="index.html" className="dropdown-item">404 Error </a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-sm-8 col-lg-2 d-flex gap-5 align-items-center justify-content-center justify-content-sm-end">
              <ul className="d-flex justify-content-end list-unstyled m-0">
                <li>
                  <a href="#" className="p-2 mx-1">
                    <svg width={24} height={24}><use xlinkHref="#user" /></svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="p-2 mx-1">
                    <svg width={24} height={24}><use xlinkHref="#wishlist" /></svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="p-2 mx-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                    <svg width={24} height={24}><use xlinkHref="#shopping-bag" /></svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div className="form-back-drop" />
    </div>
  );
}

export default Header;




