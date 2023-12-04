"use client";
import React from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import Carousel from "reactjs-nextjs-carousel";

const HomeCarousel = () => {
  const images = [
    {
      original: "/carousel/1.webp",
      thumbnail: "/carousel/1.webp",
    },
    {
      original: "/carousel/2.webp",
      thumbnail: "/carousel/2.webp",
    },
    {
      original: "/carousel/3.webp",
      thumbnail: "/carousel/3.webp",
    },
    {
      original: "/carousel/4.webp",
      thumbnail: "/carousel/4.webp",
    },
    {
      original: "/carousel/5.webp",
      thumbnail: "/carousel/5.webp",
    },
    {
      original: "/carousel/6.webp",
      thumbnail: "/carousel/6.webp",
    },
    {
      original: "/carousel/7.webp",
      thumbnail: "/carousel/7.webp",
    },
    {
      original: "/carousel/8.webp",
      thumbnail: "/carousel/8.webp",
    },
  ];

  const slides = [
    "/carousel/1.webp",
    "/carousel/2.webp",
    "/carousel/3.webp",
    "/carousel/4.webp",
    "/carousel/5.webp",
    "/carousel/6.webp",
    "/carousel/7.webp",
    "/carousel/8.webp",
  ];
  return (
    <div>
      <Carousel
        slides={slides}
        autoSlide={true}
        carouselWidth={"100%"}
        effect="slide"
        autoSlideInterval={5000}
        showIndicators={false}
        showThumbs={false}
      />
    </div>
  );
};

export default HomeCarousel;
