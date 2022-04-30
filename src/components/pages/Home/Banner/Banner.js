import React, { useState } from "react";
import img1 from "../../../../img/photo1.jpeg";
import img2 from "../../../../img/photo2.jpeg";
import img3 from "../../../../img/photo3.jpeg";
import img4 from "../../../../img/photo4.jpeg";
import img5 from "../../../../img/photo5.webp";
import img6 from "../../../../img/photo6.webp";

const images = [img1, img2, img3, img4, img5, img6];

const Banner = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  console.log(slideIndex);
  const nextSlide = () => {
    if (slideIndex !== images.length - 1) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === images.length - 1) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(images.length - 1);
    }
  };
  return (
    // <!-- component -->
    // <!-- Display Container (not part of component) START -->
    <div>
      {/* <!-- Carousel Body --> */}
      <div
        className="relative rounded-lg block md:flex items-center bg-gray-100 shadow-lg"
        style={{ minHeight: "19rem" }}
      >
        <div
          className="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg"
          style={{ minHeight: "19rem" }}
        >
          <img
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={images[slideIndex]}
            alt=""
          />
          <div className="absolute inset-0 w-full h-full bg-black opacity-50"></div>
          <div className="absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white">
            <svg
              className="w-full h-24"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 239 120"
            >
              <text
                x="25"
                y="55"
                fontFamily="'Lucida Grande', sans-serif"
                fontSize="40"
              >
                BloomingDale
              </text>
            </svg>
          </div>
        </div>
        <div className="w-full md:w-3/5 h-full flex items-center bg-white-100 rounded-lg">
          <div className="p-12 md:pr-24 md:pl-16 md:py-12">
            <p className="text-gray-600">
              <span className="text-gray-900 text-justify">BloomingDale</span> is a Bangladesh-based
              fashion stocker that has nearly doubled in size since last year.
              Since last year Bangladesh is facing a lot of diffcultites in stocking foreign orders untill it's deliverd thats where the <strong>BloomingDale</strong> came into play. They provided a significant number of warehouse in the country.
            </p>
            
              <span>
             
                <a href="#" className="text-blue-900"> Explore the inventory </a>
              </span>
              <span className="text-xs text-blue-900 ml-1">&#x279c;</span>
           
          </div>
          <svg
            className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div>
        <button
          onClick={() => prevSlide()}
          className="ml-6 absolute top-0 mt-32 left-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400  focus:outline-none focus:shadow-outline"
        >
          <span className="block" style={{ transform: "scale(-1)" }}>
            &#x279c;
          </span>
        </button>
        <button
          onClick={() => nextSlide()}
          className="mr-6 absolute top-0 mt-32 right-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 focus:outline-none focus:shadow-outline"
        >
          <span className="block" style={{ transform: "scale(1)" }}>
            &#x279c;
          </span>
        </button>
      </div>
    </div>
    //   {/* <!-- Display Container (not part of component) END --> */}
  );
};

export default Banner;
