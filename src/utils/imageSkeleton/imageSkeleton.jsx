import React from "react";
import "./skeleton.css";

const ImageSkeleton = ({ alt, src, ...props }) => {
  const [skeleton, setSkeleton] = React.useState(true);

  const handleLoad = ({ target }) => {
    setSkeleton(!skeleton);
    target.style.opacity = 1;
  };

  return (
    <div className="relative">
      {skeleton && <div className="skeleton"></div>}
      <img
        className="rounded-t-lg img-skeleton w-full h-[230px] lg:h-[163px] object-cover"
        src={src}
        alt={alt}
        onLoad={handleLoad}
        {...props}
      />
    </div>
  );
};

export default ImageSkeleton;
