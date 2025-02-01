import React from "react";
import { Link } from "react-router-dom";
import { URI } from "../../domain/constant";

function OfferBanner({ content }) {
  console.log("content", content);
  return (
    <section className="section-padding">
      <div className="container">
        <div class="text-center pb-3">
          <h3 class="mb-0 h3 fw-bold">Shop By Price</h3>
          <p class="mb-0 text-capitalize">The purpose of lorem ipsum</p>
        </div>
        <div className="row row-cols-2 row-cols-lg-2 row-cols-xl-3 g-4">
          {content &&
            content.collections_component &&
            content.collections_component.product_collections &&
            content.collections_component.product_collections.map((item) => {
              return (
                <div className="col">
                  <div className="offer-banner">
                    <Link to={`/collections/${item.slug}`}>
                      <img src={`${URI}${item.image}`} />
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default OfferBanner;
