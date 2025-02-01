import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";
// import { LazyLoadImage } from "react-lazy-load-image-component";

export default ({ src, placeHolderImage, ...props }) => {
  const [imgSrc, setSrc] = useState(
    placeHolderImage ? placeHolderImage : "/assets/images/default-image.png"
  );
  const onLoad = useCallback(() => {
    setSrc(src);
  }, [src]);
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.addEventListener("load", onLoad);
    return () => {
      img.removeEventListener("load", onLoad);
      setSrc("/assets/images/default-image.png");
    };
  }, [src, onLoad]);
  return (
    <>
      {/* <LazyLoadImage
        src={src}
        throttle={200}
        debounce={false}
        scrollPosition={"inside"}
        placeholder={"/assets/images/default-image.png"}
        {...props}
      /> */}
      <img {...props} alt={imgSrc} src={imgSrc} />
    </>
  );
};
