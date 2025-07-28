import HomeTags from "../components/listing/HomeTags";
import { categories } from '../components/navbar/Categories';
import Button from "../components/Button";
import ListingCard from "../components/listing/ListingCard";
import { useDispatch, useSelector } from 'react-redux'
import { amenities } from "../utils/amenities"
import Loader from "../components/Loader"
import SearchBar from "../components/navbar/SearchBar";
import { BiBadgeCheck  } from 'react-icons/bi';
import { BiBeenHere   } from 'react-icons/bi';
import { useState } from 'react';
import { listings } from "../utils/data";
import { Link } from 'react-router-dom';
import { FaHouseChimney } from "react-icons/fa6";


function HomePage() {

  const review = [
  {
    id: 1,
    name: "Msambweni bay",
    image: "https://res.cloudinary.com/doammcpie/image/upload/v1735823800/459883368_1047725447356517_3294153735467225596_n_eqjz4l.jpg",
    rating: "8.5",
  },
  {
    id: 2,
    name: "beach front",
    image: "https://res.cloudinary.com/doammcpie/image/upload/v1735825318/wed/330167473_506904148191482_1813237685537255236_n_e2u5ww.jpg",
    rating: "7.9",
  }
];



    const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 6; // Display 5 items at a time

  const handleNext = () => {
    if (startIndex + itemsPerPage < listings?.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };




  return (
    <>

<div className="relative h-[600px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
  {/* Background Image */}
  <img
    className="w-full h-full object-cover"
    src="/images/banner.jpg"
    alt="Banner"
  />

  {/* Left-Aligned Content */}
  <div className="absolute inset-0 flex items-center bg-black bg-opacity-50 px-8 sm:px-12 lg:px-16">
    <div className="text-white max-w-lg">
      {/* Icon and Title */}
      <div className="mb-4">
        <h5 className="flex items-center mb-2">
          <FaHouseChimney className="text-4xl mr-2" />
          Real Estate Agency
        </h5>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Search and Find Luxury House
        </h1>
        <p className="text-sm sm:text-base lg:text-lg">
        Discover renowned white sands, turquoise waters, and vibrant culture—a true coastal gem
        </p>
      </div>

      {/* Button */}
      <Link  to="/contact" className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
        Make an Enquiry
      </Link>
    </div>
  </div>
</div>

{/* Search Component Overlapping the Image */}
<div className="relative -mt-16">
  <div className="max-w-4xl mx-auto">
 
    <SearchBar />
  </div>
</div>




<main className="max-w-7xl mx-auto px-8 sm:px-16">






    <section className="pt-24">
      <h2 className="text-4xl font-semibold pb-5">Discover</h2>
      
      {/* Navigation Buttons */}
      <div className="flex justify-between mb-4">
        <button 
          onClick={handlePrevious} 
          className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300" 
          disabled={startIndex === 0}
        >
          Previous
        </button>
        
        <button 
          onClick={handleNext} 
          className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300" 
          disabled={startIndex + itemsPerPage >= listings?.length}
        >
          Next
        </button>
      </div>

      {/* Listings Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">

  {listings
    .slice(startIndex, startIndex + itemsPerPage)
    .map((listing) => (
      <ListingCard
        
        key={listing.id}
        data={listing}
      />
    ))}

      </div>
    </section>


















 </main>

<section className="pt-24">
  <div className="w-full h-[60vh] relative">
    {/* Background Image */}
    <img
      src="/images/bg.jpg"
      className="object-cover w-full h-full"
      alt="Background"
    />
    
    {/* Overlay */}
    <div className="absolute inset-0 flex items-center bg-black bg-opacity-50 text-white px-8">
      {/* House Image on the Left */}
      <img
        src="/images/house.png"
        alt="House"
        className="hidden md:block w-1/4 h-auto object-contain"
      />

      {/* Centered Text */}
      <div className="flex-grow text-center">
        <h1 className="text-5xl font-bold mb-4">Join Us Today</h1>
        <p className="text-lg mb-6">Any question you have:+254 700 0000</p>
        <div className="space-x-4">
   
          <Link  
          to="/contact" className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Agent Image on the Right */}
      <img
        src="/images/agent.png"
        alt="Agent"
        className="hidden md:block w-1/4 h-auto object-contain"
      />
    </div>
  </div>
</section>


<main className="max-w-7xl mx-auto px-8 sm:px-16">


<section className="pt-24">


<h3 className="text-4xl font-semibold pb-5 text-center">Available Amenities</h3>
    <div 
        className="
        pt-6
          grid 
          grid-cols-1 
          md:grid-cols-4
          gap-3
        
          overflow-y-auto
        "
      >
     {amenities.map((item) => (
      <div key={item.label} className="col-span-1">
        <HomeTags
          icon={item.icon} 
          label={item?.label}
          description={item?.description} 
        />
        </div>
      ))}
 </div>
 </section>

</main>



    </>
  )
}

export default HomePage
