import React from "react";
import DevCarouselV1 from "./dev-carousel-v1";

const DevCarouselV1Usage = () => {
  let carouselData = [
    <p>1</p>,
    <p>2</p>,
    <p>3</p>,
    <p>4</p>,
    <p>5</p>,
    <p>6</p>,
  ];
  return (
    <section className="max-w-lg w-full h-52">
      <DevCarouselV1 carouselData={carouselData} perView={1} />
    </section>
  );
};

export default DevCarouselV1Usage;
