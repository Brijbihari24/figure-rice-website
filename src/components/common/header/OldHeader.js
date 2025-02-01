import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

function Header() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [window.location.href]);

    const [mobileNav, setMobileNav] = useState(false)
    const [mobilemenu, setmobilemenu] = useState(false)
    const [mobilemenudropdown, setMobilemenudropdown] = useState(false)


    return (
        <div>
            {/* header-section-start  */}
            <header>
                <div className='desktop-only'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="top-navigation">
                                    <div className="navigation-tabs">
                                        <Link to="/about">
                                            <p>About</p>
                                        </Link>

                                    </div>
                                    <div className="navigation-tabs">
                                        <Link to="/production">
                                            <p>Portfolio</p>
                                        </Link>
                                    </div>
                                    <div className="navigation-tabss">
                                        <div className="logo-text">
                                            <Link to="/">
                                                <p><strong>Himanshi Saini</strong></p>
                                            </Link>
                                        </div>
                                        <div className="logo-bottom-text">
                                            Visual Storyteller<p />
                                        </div>
                                    </div>
                                    <div className="navigation-tabs">
                                        <Link to="/partition-work">
                                            <p>Partition Work</p>
                                        </Link>
                                    </div>
                                    <div className="navigation-tabs">
                                        <Link to="/testimonial">
                                            <p>Testimonials</p>
                                        </Link>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {
                    <div className="mobile-header mobile-only ">
                        <div className="mobile-nav">
                            <div className="mobile-navigation-tabs d-flex">
                                <div className="mobile-logo-text-body">
                                    <div className="mobile-logo-text">
                                        <Link to="/">
                                            <p>Himanshi Saini</p>
                                        </Link>
                                    </div>
                                    <div className="mobile-logo-bottom-text">
                                        Visual Storyteller<p />
                                    </div>
                                </div>

                                <div className="mobile-nav-btn">
                                    <div onClick={() => setMobileNav(!mobileNav)}>
                                        <div
                                            className={
                                                mobilemenu
                                                    ? 'responsive-toggle fa fa-close'
                                                    : 'responsive-toggle fa fa-bars'
                                            }
                                        />
                                    </div>
                                    {mobileNav ? (
                                        <section>
                                            <div className="mobile-navbar-menu">
                                                <div className="mobile-logo-text-body">
                                                    <div className="mobile-logo-text">

                                                    </div>
                                                </div>
                                                <i className="fa fa-close clr-txt mobile-nav-close-icon" onClick={() => setMobileNav(false)} />

                                                <hr />
                                                <div className="mobile-menu-links">
                                                    <ul>
                                                        <li>
                                                            <Link to="/">
                                                                Home
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/about">
                                                                <p>About</p>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/production">
                                                                <p>Option</p>
                                                            </Link>
                                                        </li>

                                                        <li>
                                                            <Link to="/partition-work">
                                                                <p>Option</p>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/testimonial">
                                                                <p>Option</p>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="footer-social-media pt-8">
                                                    <div style={{ textAlign: "center" }} className="footer-social-media-text">
                                                        My Socials:
                                                    </div>
                                                    <div className="footer social-media-icons">
                                                        <div className="social-media-icons-icons">


                                                            <div className="social-icon new-social-icon">
                                                                <a target="_blank" href="https://twitter.com/Himanshisaini27">
                                                                    <i className="fa-brands fa-twitter" />
                                                                </a>
                                                            </div>
                                                            <div className="social-icon new-social-icon">
                                                                <a target="_blank" href="https://www.linkedin.com/in/himanshisaini27/">
                                                                    <i className="fa-brands fa-linkedin" />
                                                                </a>
                                                            </div>

                                                            <div className="social-icon new-social-icon">
                                                                <a target="_blank" href="https://instagram.com/himanshisaini27?igshid=ZDdkNTZiNTM=">
                                                                    <i className="fa-brands fa-instagram" />
                                                                </a>
                                                            </div>
                                                            <div className="social-icon new-social-icon">
                                                                <a target="_blank" href="https://www.youtube.com/channel/UCeuOTBA5T7c_WlyHzDCyr-g">
                                                                    <i className="fa-brands fa-youtube" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </section>
                                    ) : (null)}
                                </div>
                            </div>
                        </div>
                    </div>
                }

            </header>
            {/* header-section-ends  */}
        </div>
    )
}

export default Header