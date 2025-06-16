import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoTiktok } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { getSubscribeAsync } from '../features/user/userActions'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from "react-hot-toast";

function Footer() {

  const dispatch = useDispatch()

  const [email, setEmail] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter a valid email address");
      return;
    }

    const auth = await dispatch(getSubscribeAsync({ email }));
    const error = auth?.error?.message;

    if (!error) {
      toast.success("Thank you for subscribing");
      setEmail(""); // Clear input after successful submission
    } else {
      toast.error(error);
    }
  };


  return (
    <>
      {/* Top Section */}
      <div className="relative -mb-16 mx-auto w-[90%] bg-blue-500 text-white py-10">
        <div className="w-[80%] mx-auto px-6 md:flex md:items-center md:justify-between text-center md:text-left">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold mb-2">Looking for a dream home?</h2>
            <p className="text-lg">We can help you realize your dream of a new home.</p>
          </div>

          {/* Button */}
          <div className="mt-4 md:mt-0">
            <Link  
              to="/listings"
              className="bg-white text-blue-500 px-6 py-3 rounded-md shadow-md hover:bg-gray-100 inline-flex items-center"
            >
              Explore Properties →
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Section */}
  <footer className="bg-gray-900 text-white py-12">
  <div className="pt-24  mx-auto grid  w-[90%] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    
    {/* Logo & Contact Information */}
    <div className='pb-5'>
      <h3 className="text-2xl font-semibold mb-4">
        <img
          src="/images/logo.webp"
          height="60"
          width="60"
          alt="Logo"
        />
      </h3>

      {/* Description */}
  

      {/* Contact Information */}
      <ul className="space-y-2">
        <li className="flex items-center">
          <FaLocationDot className="mr-2" />
          <a href="#" className="hover:text-gray-400">Kenya, Nakuru</a>
        </li>
        <li className="flex items-center">
          <IoCall className="mr-2" />
          <a href="#" className="hover:text-gray-400">+254 700 000</a>
        </li>
    
      </ul>

  
    </div>

    {/* Help Section */}
    <div>
      <h3 className="text-2xl font-semibold mb-4">Social</h3>
        <ul className="space-y-2">
                <li className="flex items-center">
          <BiLogoFacebook className="mr-2" />
          <a href="#" className="hover:text-gray-400">Facebook</a>
        </li>

        <li className="flex items-center">
          <BiLogoTiktok className="mr-2" />
          <a  href="#" className="hover:text-gray-400">TikTok</a>
        </li>
        <li className="flex items-center">
          <BiLogoInstagram className="mr-2" />
          <a href="#" className="hover:text-gray-400">Instagram</a>
        </li>
    
      </ul>
    </div>

    {/* Services Section */}
    <div>
      <h3 className="text-2xl font-semibold mb-4">Services</h3>
      <ul className=" space-y-2">
        <li><a href="#" className="hover:text-gray-400">Home</a></li>
        <li><a href="#" className="hover:text-gray-400">Listing</a></li>
        <li><a href="#" className="hover:text-gray-400">Contact</a></li>

      </ul>
    </div>

    {/* Newsletter Section */}
    <div>
      <h3 className="text-2xl font-semibold mb-4">Newsletter</h3>
      <p className="mb-4">Keep in touch with the latest updates</p>
       <form onSubmit={onSubmit} className="flex items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="p-3 text-black rounded-l-md flex-1 border border-gray-300"
                aria-label="Email"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 text-white p-4 rounded-r-md hover:bg-blue-600"
                aria-label="Subscribe"
              >
                <SiMinutemailer />
              </button>
            </form>
    </div>

  </div>

  {/* Footer Bottom */}
  <div className="border-t border-gray-700 mt-2 pt-2 text-center">
    <p>© Tours - All rights reserved</p>
  </div>
</footer>


    </>
  );
}

export default Footer;
