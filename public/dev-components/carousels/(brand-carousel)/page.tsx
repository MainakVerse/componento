import React from "react";
import BrandCarousel from "./brand-carousel";

const BrandCarouselUsage = () => {
  const brands = [
    <p>Brand 1</p>,
    <p>Brand 2</p>,
    <p>Brand 3</p>,
    <p>Brand 4</p>,
    <p>Brand 5</p>,
    <p>Brand 6</p>,
  ];
  return <BrandCarousel pauseOnHover brands={brands} />;
};

export default BrandCarouselUsage;
