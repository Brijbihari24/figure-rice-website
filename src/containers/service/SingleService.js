import React, { useEffect } from 'react'
import Header from '../../components/common/header/Header'
import Footer from '../../components/common/footer/Footer'
import Breadcrum from '../../components/breadcrum/Breadcrum'
import {
    useSingleService,
    useSingleServiceBySlug,
    useSelectAllService,
    useSimilarServicesByID,
} from "../../shared/hooks/UseService";
import renderHTML from "react-render-html";
import { URI } from '../../domain/constant';
import DetailPageBookAppointment from '../collections/DetailPageBookAppointment';
import ServiceCard from './ServiceCard';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';



function SingleService({ match }) {

    const [data] = useSingleServiceBySlug(match.params.slug);
    const { service, service_loading } = data;
    console.log("SERVICE", service);

    const [service_data_similar, getSimilarServiceByID] = useSimilarServicesByID()
    useEffect(() => {
        if (service && service._id) {
            getSimilarServiceByID(service._id)
        }
    }, [service])
    const { similar_services, similar_services_loading } = service_data_similar;
    console.log("Similar Services -", similar_services);
    return (
        <div>
            <Header />
            {service && (
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{service.meta_title}</title>
                    <meta name="description" content={service.meta_desc} />

                </Helmet>
            )}
            <div className="form-back-drop" />
            {!service_loading ? service && (
                <>
                    <Breadcrum bg_heading={"Services"} page_title={service.name} breadcrumb_image={service.banner_image} />
                    <section className="service-details py-150 rpy-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="service-details-content-wrap">
                                        <div className="service-details-image wow fadeInUp delay-0-2s">
                                            <img src={`${URI}${service.image}`} alt="Service Details" />
                                        </div>
                                        <div className="service-details-content pl-10 wow fadeInUp delay-0-2s">
                                            {renderHTML(service.description)}
                                        </div>
                                        <div className="service-middle-images">
                                            <div className="row">

                                                {service && service.media && service.media.map((item) => {
                                                    return (
                                                        <div className="col-sm-6 wow fadeInLeft delay-0-2s">
                                                            <img src={`${URI}${item}`} alt="Service Middle" />
                                                        </div>
                                                    )
                                                })}

                                            </div>
                                        </div>
                                        <div className="service-details-content mb-80 wow fadeInUp delay-0-2s">
                                            <h3>FAQ's</h3>
                                            <div className="faq-accordion mt-35" id="faq-accordion">
                                                {service && service.faqs && service.faqs.map((item) => {
                                                    return (
                                                        <div className="card">
                                                            <a className="collapsed card-header" id="heading1" href="#" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapse1">{item.question}<i className="fas fa-chevron-down" />
                                                            </a>
                                                            <div id="collapse1" className="collapse" data-parent="#faq-accordion">
                                                                <div className="card-body">
                                                                    <p>{item.answer}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <hr />
                                        <section className="similar-products">
                                            <div className="container">
                                                <div className="similar-products-heading ptb-15px">
                                                    <h3>Similar Services</h3>
                                                </div>
                                                <div className="row">

                                                    {similar_services && similar_services.map((item) => {
                                                        return (
                                                            <div className="col-md-4">
                                                                <Link to={`/service/${item.slug}`}>
                                                                    <ServiceCard
                                                                        name={item.name}
                                                                        image={`${URI}${item.image}`}
                                                                    />
                                                                </Link>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="service-sidebar rmt-55">
                                        <div className="widget category-widget wow fadeInUp delay-0-2s">
                                            <h5 className="widget-title">Services Category</h5>
                                            <ul>
                                                {
                                                    similar_services && similar_services.map((service) => {
                                                        return (
                                                            <li>
                                                                <Link to={`/service/${service.slug}`}>
                                                                    {service.name}<span className="fas fa-long-arrow-alt-right" />
                                                                </Link>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                        <DetailPageBookAppointment />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </>
            ) : (
                <div></div>
            )}



            <Footer />
        </div>
    )
}

export default SingleService