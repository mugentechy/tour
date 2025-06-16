
import HeartButton from "../HeartButton";

import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { FaCamera } from "react-icons/fa";
import { FaFilm } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { LiaVectorSquareSolid } from "react-icons/lia";
import { TbBathFilled } from "react-icons/tb";
import { IoIosBed } from "react-icons/io";


function ListingCard({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = '',
  currentUser,
}) {
  let navigate = useNavigate();



  // Set the label based on the status of the listing
  const statusLabel = data?.status === "sale" ? "For Sale" : "For Rent";

  return (
    <>
      <div 
        onClick={() => navigate(`/listing/${data?.id}`)} 
        className="col-span-1 cursor-pointer group shadow-md"
      >
        <div className="flex flex-col gap-2 w-full">
          <div 
            className="
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              

            "
          >
            <img
              className="
                object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition
              "
              src={data?.images[0]}
              alt="Listing"
            />
                 <div className="absolute top-3 right-3">
              {/* Render the button with the dynamic status */}


             <HeartButton />
            </div>
            {/* Location at the bottom left */}
            <div className="absolute bottom-3 left-3  p-2 rounded-md shadow-md">

                  <button className="bg-white p-2 rounded-full shadow-md flex items-center justify-center">
              <FaLocationDot className="w-6 h-6 text-gray-800"  />
                <span className="ml-1">{data?.location}</span>
              </button>


         
            </div>

            {/* Right side buttons (photo and gallery) */}
            <div className="absolute bottom-3 right-3 flex gap-2">
              <button className="bg-white p-2  shadow-md flex items-center justify-center">
              <FaCamera className="w-6 h-6 text-gray-800" />

           
                <span className="ml-1">3</span>
              </button>
              <button className="bg-white p-2  shadow-md flex items-center justify-center">
              <FaFilm className="w-6 h-6 text-gray-800"  />
                <span className="ml-1">3</span>
              </button>
            </div>
          </div>
        </div>





     <div className="mt-2">
        {/*      <div className="text-lg font-bold">
                ${data?.price} <span className="text-sm">/Month</span>
              </div>*/}
              <h2 className="text-xl mt-1 font-semibold">
                <a href={`/shop/${data?.title?.replace(/\s+/g, '-').toLowerCase()}`}>
                  {data?.title}
                </a>
              </h2>
            </div>



<ul className="flex gap-6 mt-4 text-sm text-gray-600">





  <li className="flex flex-col items-start items-center gap-2">
 
   <span className="flex items-center gap-2 text-lg">
  {data?.bedroom}
  <IoIosBed size={24} />
</span>
     <span>Bedrooms</span>
  </li>



 <div className="h-10 border-l border-gray-300"></div>

  <li className="flex flex-col items-start items-center gap-2">
 
   <span className="flex items-center gap-2 text-lg">
  {data?.bathroom || 3450}
  <TbBathFilled size={24} />
</span>
     <span> Bathrooms</span>
  </li>

 <div className="h-10 border-l border-gray-300"></div>



  <li className="flex flex-col items-start items-center gap-2 text-lg">
 
   <span className="flex items-center gap-2">
  {data?.squareFeet || 3450}
  <LiaVectorSquareSolid size={24} />
</span>
     <span>square ft</span>
  </li>
</ul>

      </div>
    </>
  );
}

export default ListingCard;
