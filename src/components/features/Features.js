import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaMoneyBillWaveAlt } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GrStatusGood } from "react-icons/gr";
import { MdOutlineSavings } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { MdOutlineLocalOffer } from "react-icons/md";

function Features() {
    return (
        <>
            <section className="features ptb-60">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-3 row-cols-lg-5">
                        <div className="col">
                            <div className="card text-align-center mb-3 border-gold p-3">
                                <div className="featured-icons text-dark mb-3">
                                    <TbTruckDelivery className="icon" />
                                </div>
                                <div className="card-body p-0">
                                    <h5>Free delivery</h5>
                                    <p className="card-text">Get your order delivered to your doorstep.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card text-align-center mb-3 border-gold p-3">
                                <div className="featured-icons text-dark mb-3">
                                    <RiSecurePaymentLine className="icon" />
                                </div>
                                <div className="card-body p-0">
                                    <h5>100% secure payment</h5>
                                    <p className="card-text">Safe, encrypted, and hassle-free transactions.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card text-align-center mb-3 border-gold p-3">
                                <div className="featured-icons text-dark mb-3">
                                    <GrStatusGood className="icon" />
                                </div>
                                <div className="card-body p-0">
                                    <h5>Quality guarantee</h5>
                                    <p className="card-text">Premium quality products you can trust.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card text-align-cente rmb-3 border-gold p-3">
                                <div className="featured-icons text-dark mb-3">
                                    <MdOutlineSavings className="icon" />
                                </div>
                                <div className="card-body p-0">
                                    <h5>guaranteed savings</h5>
                                    <p className="card-text">Best prices and exclusive discounts every day.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card text-align-center mb-3 border-gold p-3">
                                <div className="featured-icons text-dark mb-3">
                                    <MdOutlineLocalOffer className="icon" />
                                </div>
                                <div className="card-body p-0">
                                    <h5>Daily offers</h5>
                                    <p className="card-text">Exciting new deals and special discounts every day.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features