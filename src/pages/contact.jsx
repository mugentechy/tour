import ListingCategory from "../components/listing/ListingCategory";
import { categories } from '../components/navbar/Categories';
import Button from "../components/Button";
import ListingCard from "../components/listing/ListingCard";
import { useDispatch, useSelector } from 'react-redux'
import { amenities } from "../utils/amenities"
import Loader from "../components/Loader"
import Search from "../components/navbar/Search";
import { BiBadgeCheck, BiBeenHere } from 'react-icons/bi';
import { useState } from 'react';
import { useEffect, useRef } from 'react';
import Map from "../components/Map"
import Select from 'react-select'
import Input from "../components/inputs/Input";
import { toast } from "react-hot-toast";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoTiktok } from "react-icons/bi";
import { contactAsync } from '../features/user/userActions'
import { useForm } from 'react-hook-form'




function ContactPage() {
  // For number increment animation
  const [count, setCount] = useState({ listingsForSale: 0, listingsForRent: 0, propertySold: 0, affiliatePartners: 0 });
  const hasAnimated = useRef(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();


  const addContact = async (data) => {
   
    try {
      await dispatch(contactAsync(data));
      console.log("Form submitted successfully:", data);
      toast.success("Your request has been submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("There was an error submitting your request. Please try again.");
    } 
  };

  return (
    <>






      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-24">

        <h2 className="text-2xl font-semibold mb-4">Contact us</h2>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

  <form onSubmit={handleSubmit(addContact)}>
          {/* First Row */}
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 mb-4 min-w-[200px]">
              <input
                id="first_name"
                label="First Name"
                type="text"
                placeholder="First Name"
                className="p-3 text-black rounded-l-md flex-1 border border-gray-300"
                
              {...register("fname", { required: "First name is required" })}
              />
            
            </div>
            <div className="flex-1 mb-4 min-w-[200px]">
              <input
                id="last_name"
                label="Last Name"
                type="text"
                placeholder="Last Name"
                className="p-3 text-black rounded-l-md flex-1 border border-gray-300"
              {...register("lname", { required: "Last name is required" })}
              />
             
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 mb-4 min-w-[200px]">
              <input
                id="email"
                label="Email Address"
                type="email"
                placeholder="Email"
                className="p-3 text-black rounded-l-md flex-1 border border-gray-300"
               
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
           
            </div>
            <div className="flex-1 mb-4 min-w-[200px]">
              <input
                id="phone"
                label="Phone Number"
                placeholder="Phone Number"
                type="text"
                className="p-3 text-black rounded-l-md flex-1 border border-gray-300"
                {...register("phone", { required: "Phone number is required" })}
              />
             
            </div>
          </div>

          {/* Third Row */}
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 mb-4 min-w-[200px]">
              <textarea
                id="message"
                placeholder="Enter your message"
               
                {...register("message", { required: "Message is required" })}
                className="w-full p-2 border rounded-md"
                rows="5"
              />
             
            </div>
          </div>

          {/* Submit Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md w-full"
            
            >
              Submit
            </button>
          </div>
        </form>


           

            <div>
              
         

 <div>
          
    





   <Map center={[-4.3187, 39.5940]} />


<div className="mt-5 pt-5 text-center">
  <p>Find us on</p>
  
  <div className="mt-4 space-x-4 flex justify-center items-center">
    <a href="https://www.facebook.com/vicmugenya" className="hover:text-gray-400 text-2xl">
      <BiLogoFacebook />
    </a>
    <a href="https://www.instagram.com/dianibeachrealty/profilecard/?igsh=MWhxY3FtaXc2Y2Fpeg==" className="hover:text-gray-400 text-2xl">
      <BiLogoInstagram />
    </a>
    <a href="https://www.tiktok.com/@b.mugen?_t=ZM-8siA6DSitC2&_r=1" className="hover:text-gray-400 text-2xl">
      <BiLogoTiktok />
    </a>
  </div>
</div>





        </div>
  










            </div>
          </div>
        </section>





        {/* New Section with Incrementing Numbers */}

      </main>
    </>
  )
}

export default ContactPage;
