import React from 'react'
import {
  useSingleCollection,
  useSingleCollectionBySlug,
  useSelectAllCollection
} from "../../shared/hooks/UseCollection";
import { URI } from "../../domain/constant";
import renderHTML from "react-render-html";
import Header from '../../components/common/header/Header';
import Footer from '../../components/common/footer/Footer';
import ServiceCard from '../service/ServiceCard';
import { Link } from 'react-router-dom';
import { useSelectAllService } from "../../shared/hooks/UseService";
import DetailPageBookAppointment from './DetailPageBookAppointment';
import Breadcrum from '../../components/breadcrum/Breadcrum';
import { Helmet } from 'react-helmet';

function SingleCollection({ match }) {

  const [data] = useSingleCollectionBySlug(match.params.slug);
  const { collection, collection_loading } = data;

  const [collection_data] = useSelectAllCollection();
  const { all_collections, all_collections_loading } = collection_data;

  const [service_data] = useSelectAllService();
  const { all_services, all_services_loading } = service_data;

  return (
    <div>
      <Header />
      {collection && (
        <Helmet>
          <meta charSet="utf-8" />
          <title>{collection.meta_title}</title>
          <meta name="description" content={collection.meta_desc} />

        </Helmet>
      )}


      {
        !collection_loading ? collection && (
          <>
            <Breadcrum bg_heading={"Concerns"} page_title={collection.name} breadcrumb_image={collection && collection.banner_image} />
            <section className="service-details py-150 rpy-100">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="service-details-content-wrap">
                      <div className="service-details-image wow fadeInUp delay-0-2s">
                        <img src={`${URI}${collection.image}`} alt="Service Details" />
                      </div>

                      <div className="pl-10  wow fadeInUp delay-0-2s ">
                        <div className="list-bullet">
                          {collection && collection.description && renderHTML(collection.description)}

                        </div>
                      </div>

                      <hr />
                      <section className="related-services">
                        <div className="container">
                          <div className="row">
                            {
                              all_services && all_services.map((item) => {
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
                              })
                            }
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="service-sidebar rmt-55">
                      <div className="widget category-widget wow fadeInUp delay-0-2s">
                        <h5 className="widget-title">Concerns</h5>
                        <ul>
                          {
                            all_collections && all_collections.map((item) => {
                              return (
                                <li>
                                  <Link to={`/collections/${item.slug}`}>
                                    {item.name}<span className="fas fa-long-arrow-alt-right" />
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
        )
      }
      <Footer />
    </div>
  )
}

export default SingleCollection