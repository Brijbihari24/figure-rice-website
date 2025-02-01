import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { URI } from "../../domain/constant";
import Image from "../common/Image";

function FeaturedBanner({ content }) {
  console.log("featured", content);
  return (
    <div>
      <section className="py-4">
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3 g-4">
            {content &&
              content.gallery_component &&
              content.gallery_component.map((item) => {
                return (
                  <div className="col">
                    <div className="card rounded-0 shadow-none bg-info bg-opacity-25">
                      <Link to={item.link ? item.link : "/shop"}>
                        <Image
                          src={`${URI}${item.image}`}
                          className="img-fluid"
                          placeHolderImage="/assets/images/placeholder-banner.png"
                        />
                      </Link>
                    </div>
                  </div>
                );
              })}
          </div>
          {/*end row*/}
        </div>
      </section>
    </div>
  );
}

export default FeaturedBanner;
