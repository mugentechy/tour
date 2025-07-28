import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Button from "../Button";
import useCountries from "../../hooks/useCountries";
import Heading from "../Heading";

function ListingHead({ title, locationValue, imageSrc, id, currentUser }) {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleImageChange = (index) => {
    setSelectedImage(index);
  };

  return (
    <div className="flex flex-col gap-6">
      <Heading title={title} subtitle={locationValue} />

      <div className="w-full h-[60vh] overflow-hidden rounded-xl relative">
        <Carousel
          selectedItem={selectedImage}
          onChange={handleImageChange}
          showThumbs={false}
          showIndicators={true}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={5000}
          className="rounded-xl"
        >

            {imageSrc[0]?.map((src, index) => (
      <div key={index} className="w-full h-full">
        <img src={src} alt={index} className="object-cover w-full h-[60vh] rounded-xl" />
      </div>
    ))}

    
        </Carousel>

        {/* Optional overlay button or actions */}
        <div className="absolute top-4 right-4 z-10">
          {/* Add buttons or action icons here if needed */}
        </div>
      </div>
    </div>
  );
}

export default ListingHead;
