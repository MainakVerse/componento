"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { GoDot } from "react-icons/go";
import Autoplay from "embla-carousel-autoplay";
import { HiOutlineChevronRight } from "react-icons/hi";

const CarouselNavigation = ({
  roleClick,
  role,
  className,
}) => (
  <button
    type="button"
    className={`text-2xl text-ACCENT hover:text-ACCENT ${className}`}
    onClick={roleClick}
  >
    <HiOutlineChevronRight className={`${role === "prev" && "rotate-180"}`} />
  </button>
);

const CarouselSlides = ({ carouselData, perView }) => {
  return (
    <div className=" flex h-full">
      {carouselData.map((elem, index) => (
        <div
          key={`slide-${index}`}
          className="flex-grow-0 flex-shrink-0 p-2 overflow-hidden"
          style={{ flex: `0 0 ${100 / perView}%` }}
        >
          <div className="w-full h-full bg-LIGHT rounded-lg dark:bg-DARK border border-ACCENT/30 text-ACCENT font-semibold text-4xl grid place-items-center">
            {elem}
          </div>
        </div>
      ))}
    </div>
  );
};
const CarouselDots = ({ slides, selectedIndex, onDotClick }) => (
  <span className="flex z-10 items-center justify-center absolute left-1/2 transform -translate-x-1/2 bottom-3">
    {Array.from({ length: slides }).map((_, index) => (
      <GoDot
        onClick={() => onDotClick(index)}
        key={index}
        className={`cursor-pointer transition-all duration-500 hover:text-ACCENT 
         ${
           index === selectedIndex
             ? " text-ACCENT text-lg"
             : " text-ACCENT/40 text-base"
         }
       `}
      />
    ))}
  </span>
);

const DevCarouselV1 = ({
  carouselData,
  perView = 1,
  autoplay = true,
}) => {
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      containScroll: "keepSnaps",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 2000, playOnInit: autoplay, stopOnInteraction: false })]
  );
  const scrollTo = (index) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  };
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const logSlidesInView = useCallback((emblaApi) => {
    if (!emblaApi) return;
    setSelectedSlideIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", logSlidesInView).on("reInit", logSlidesInView);
    }
  }, [emblaApi, logSlidesInView]);

  return (
    <div
      className=" w-full h-full overflow-hidden relative rounded-lg"
      ref={emblaRef}
    >
      <CarouselSlides carouselData={carouselData} perView={perView} />
      <CarouselNavigation
        roleClick={scrollPrev}
        role="prev"
        className="absolute top-1/2 -translate-y-1/2 left-2"
      />
      <CarouselNavigation
        roleClick={scrollNext}
        role="next"
        className="absolute top-1/2 -translate-y-1/2 right-2"
      />
      <CarouselDots
        slides={carouselData.length}
        selectedIndex={selectedSlideIndex}
        onDotClick={scrollTo}
      />
    </div>
  );
};

export default DevCarouselV1;
