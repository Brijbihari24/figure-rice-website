import React from "react";
import renderHTML from "react-render-html";
import Slider from "react-slick";
import { URI } from "../../domain/constant";

function TopCategory({ content }) {
  console.log("CONTENT", content);
  var product_settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    // nextArrow: <NextArrowComponent />,
    // prevArrow: <PreArrowComponent />,

    centerPadding: "10px",
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };
  return (
    <div>
      <section className="cartegory-slider section-padding bg-section-2">
        <div className="container">
          <div className="text-center pb-3">
            <h3 className="mb-0 h3 fw-bold"> {content.title} </h3>
            <p className="mb-0 text-capitalize">
              {content.description && renderHTML(content.description)}
            </p>
          </div>
          <div className="cartegory-box">
            <Slider {...product_settings}>
              {content.collections_component &&
                content.collections_component.product_collections &&
                content.collections_component.product_collections.map(
                  (item) => {
                    return (
                      <a href="shop-grid-type-4.html">
                        <div className="card">
                          <div className="card-body">
                            <div className="overflow-hidden">
                              <img
                                src={
                                  item.image
                                    ? `${URI}${item.image}`
                                    : "/assets/images/categories/02.webp"
                                }
                                className="card-img-top rounded-0"
                              />
                            </div>
                            <div className="text-center">
                              <h5 className="mb-1 cartegory-name mt-3 fw-bold">
                                {item.name}
                              </h5>
                            </div>
                          </div>
                        </div>
                      </a>
                    );
                  }
                )}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TopCategory;
