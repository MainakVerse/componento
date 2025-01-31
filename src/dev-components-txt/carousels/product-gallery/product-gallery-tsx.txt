"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { HiOutlineChevronRight } from "react-icons/hi";

type ProductImage = {
  src: string;
  alt: string;
};

type ProductGalleryProps = {
  images: ProductImage[];
};

type CarouselNavigationProps = {
  roleClick: () => void;
  role: "next" | "prev";
  className?: string;
};

type CarouselThumbnailsProps = {
  images: ProductImage[];
  selectedIndex: number;
  onThumbClick: (index: number) => void;
};

const CarouselNavigation = ({
  roleClick,
  role,
  className,
}: CarouselNavigationProps) => (
  <button
    type="button"
    className={`text-2xl bg-white/50 rounded-full text-ACCENT hover:text-ACCENT ${className}`}
    onClick={roleClick}
  >
    <HiOutlineChevronRight className={`${role === "prev" && "rotate-180"}`} />
  </button>
);

const CarouselThumbnails = ({
  images,
  selectedIndex,
  onThumbClick,
}: CarouselThumbnailsProps) => {
  return (
    <div className="flex gap-2 cursor-pointer p-1">
      {images.map((image, index) => (
        <div
          className={`flex-[0_0_20%] min-w-0 aspect-square relative rounded-md bg-slate-200 transition-opacity duration-200 ${
            index === selectedIndex
              ? "ring-2 ring-ACCENT"
              : "opacity-50 hover:opacity-100"
          }`}
          key={index}
          onClick={() => onThumbClick(index)}
        >
          <img
            src={image.src}
            alt={`Thumbnail ${index + 1}`}
            className="w-full h-full object-cover rounded"
          />
        </div>
      ))}
    </div>
  );
};
const ProductGallery = ({ images }: ProductGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mainViewRef, mainViewApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });
  const [thumbViewRef, thumbViewApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
    align: "start",
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!mainViewApi || !thumbViewApi) return;
      mainViewApi.scrollTo(index);
    },
    [mainViewApi, thumbViewApi]
  );

  const scrollPrev = useCallback(() => {
    if (mainViewApi) {
      mainViewApi.scrollPrev();
    }
  }, [mainViewApi]);

  const scrollNext = useCallback(() => {
    if (mainViewApi) {
      mainViewApi.scrollNext();
    }
  }, [mainViewApi]);

  const onSelect = useCallback(() => {
    if (!mainViewApi || !thumbViewApi) return;
    setSelectedIndex(mainViewApi.selectedScrollSnap());
    thumbViewApi.scrollTo(mainViewApi.selectedScrollSnap());
  }, [mainViewApi, thumbViewApi]);

  useEffect(() => {
    if (!mainViewApi) return;
    onSelect();
    mainViewApi.on("select", onSelect);
    return () => {
      mainViewApi.off("select", onSelect);
    };
  }, [mainViewApi, onSelect]);

  return (
    <div className="w-full max-w-xs mx-auto space-y-3 p-2 bg-LIGHT dark:bg-DARK rounded-lg border border-ACCENT/30">
      {/* Main carousel */}
      <div className="overflow-hidden relative rounded-md" ref={mainViewRef}>
        <div className="flex touch-pan-y">
          {images.map((image, index) => (
            <div
              className="flex-[0_0_100%] min-w-0 bg-slate-200 relative aspect-square"
              key={index}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
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
      </div>

      {/* Thumbnails */}
      <div className="overflow-hidden" ref={thumbViewRef}>
        <CarouselThumbnails
          images={images}
          selectedIndex={selectedIndex}
          onThumbClick={onThumbClick}
        />
      </div>
    </div>
  );
};

export default ProductGallery;
