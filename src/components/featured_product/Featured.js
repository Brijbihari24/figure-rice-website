import React, { useEffect } from "react";
import renderHTML from "react-render-html";
import ProductCard from "../product/ProductCard";
import NextArrowComponent from "../slider/NextArrowComponent";
import PreArrowComponent from "../slider/PreArrowComponent";
import Slider from "react-slick";
import { useProductsByCollection } from "../../shared/hooks/UseProduct";
function Featured({
  content,
  setIs_modal_open,
  is_modal_open,
  setModalData,
  modalData,
}) {
  const [productData, getProductData] = useProductsByCollection();

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
  useEffect(() => {
    if (
      content &&
      content.collection_product_component &&
      content.collection_product_component.product_collection
    ) {
      getProductData(
        content.collection_product_component.product_collection.slug
      );
    }
  }, [content]);

  return (
    <div>
      <section className="section-padding bg-grey">
        <div className="container">
          <div className="text-center pb-3">
            <h3 className="mb-0 h3 fw-bold">{content.title}</h3>
            <p className="mb-0 text-capitalize">
              {content.description && renderHTML(content.description)}
            </p>
          </div>
          <div className="product-thumbs">
            <Slider {...product_settings}>
              {productData &&
                productData.products &&
                productData.products.map((product) => {
                  return (
                    <ProductCard
                      product={product}
                      setIs_modal_open={setIs_modal_open}
                      is_modal_open={is_modal_open}
                      setModalData={setModalData}
                      modalData={modalData}
                    />
                  );
                })}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Featured;
