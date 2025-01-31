import BrandCarouselUsage from "./(brand-carousel)/page";
import DevCarouselV1Usage from "./(dev-carousel-v1)/page";
import ProductGalleryUsage from "./(product-gallery)/page";

const CarouselsInfo = [
  {
    title: "Dev Carousel V1",
    component: DevCarouselV1Usage,
    variants: {
      tsx: true,
      jsx: true,
    },
    details: {
      description:
        "A responsive carousel component using Embla Carousel, supporting multiple views and navigation dots.",
      features: [
        "Responsive design with adjustable perView",
        "Supports looping through slides",
        "Infinite scrolling between slides",
        "Customizable navigation buttons",
        "Dots navigation with active dot indicator",
        "Smooth scrolling animation",
        "Support auto-playing with autoplay option",
        "Supports keyboard navigation",
      ],
      props: [
        {
          propName: "carouselData",
          propExample: `[<p>1</p>, <p>2</p>, <p>3</p>]`,
          propDetail:
            "Array of React elements representing the slides in the carousel.",
        },
        {
          propName: "perView",
          propExample: `2`,
          propDetail: "Number of slides to display at once. Defaults to 1.",
        },
        {
          propName: "autoplay",
          propExample: `true`,
          propDetail:
            "Boolean flag to enable/disable autoplay. Defaults to true.",
        },
      ],
      doc_links: [
        "https://www.embla-carousel.com/examples/predefined/",
        "https://www.embla-carousel.com/plugins/autoplay/",
      ],
      packages: [
        {
          pckg_name:
            "embla-carousel-react embla-carousel embla-carousel-autoplay",
          pckg_link: "https://github.com/benleung/embla-carousel-react",
        },
      ],
    },
  },
  {
    title: "Product Gallery",
    component: ProductGalleryUsage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A responsive product gallery that allows users to view images in a carousel format with thumbnail navigation.",
      features: [
        "Main image carousel with smooth transitions",
        "Thumbnail navigation for quick image selection",
        "Next and previous navigation buttons",
        "Responsive design suitable for various screen sizes",
      ],
      helpers: [],
      props: [
        {
          propName: "images",
          propExample: `[ { src: '/assets/img-placeholder.png', alt: 'img1' }, { src: '/assets/img-placeholder.png', alt: 'img2' } ]`,
          propDetail:
            "An array of objects, each containing a `src` and `alt` for the product images.",
        },
      ],
      doc_links: [
        "https://www.embla-carousel.com/examples/predefined/",
      ],
      packages: [
        {
          pckg_name: "embla-carousel-react embla-carousel",
          pckg_link: "https://github.com/benleung/embla-carousel-react",
        },
      ],
    },
  },
  {
    title: "Brand Carousel",
    component: BrandCarouselUsage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A horizontally scrolling carousel for displaying brand logos or names.",
      features: [
        "Smooth scrolling effect for continuous display of brands",
        "Pause on hover functionality to allow users to focus on a specific brand",
        "Customizable appearance with support for different styles and layouts",
        "Responsive design that adapts to various screen sizes",
      ],
      helpers: [],
      doc_links: ["https://www.react-fast-marquee.com/"],
      props: [
        {
          propName: "brands",
          propExample: `[<p>Brand 1</p>, <p>Brand 2</p>]`,
          propDetail:
            "An array of React nodes representing the brands to be displayed in the carousel.",
        },
        {
          propName: "pauseOnHover",
          propExample: `true`,
          propDetail:
            "A boolean that determines whether the scrolling should pause when the user hovers over the carousel.",
        },
      ],
      packages: [
        {
          pckg_name: "react-fast-marquee",
          pckg_link: "https://www.npmjs.com/package/react-fast-marquee",
        },
      ],
    },
  },
];

export default CarouselsInfo;
