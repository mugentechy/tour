import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import useLoginModal from "../../hooks/useLoginModal";
import useRegisterModal from "../../hooks/useRegisterModal";
import { useCallback, useState } from "react";
import useRentModal from "../../hooks/useRentModal";
import MenuItem from "./MenuItem";
import { useNavigate } from "react-router-dom";
import useSearchModal from "../../hooks/useSearchModal";

function UserMenu({ currentUser }) {
  const navigate = useNavigate(); // Initialize useNavigate
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const rentModal = useRentModal();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        {/* Links visible on medium and larger screens */}
        <div
          onClick={() => navigate("/")}
          className="
            hidden
            md:block
            text-sm 
            font-semibold 
            py-3 
            px-4 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
          "
        >
          Home
        </div>
        <div
          onClick={() => navigate("/listings")}
          className="
            hidden
            md:block
            text-sm 
            font-semibold 
            py-3 
            px-4 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
          "
        >
          Listings
        </div>
        <div
          onClick={() => navigate("/contact")}
          className="
            hidden
            md:block
            text-sm 
            font-semibold 
            py-3 
            px-4 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
          "
        >
          Contact
        </div>

        {/* Menu button visible on all screen sizes */}
        <div
          onClick={toggleOpen}
          className="
            p-4
            md:py-1
            md:px-2
            border-[1px] 
            border-neutral-200 
            flex 
            flex-row 
            items-center 
            gap-3 
            rounded-full 
            cursor-pointer 
            hover:shadow-md 
            transition
          "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.avatar_url || "/default-avatar.png"} />
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="
            absolute 
            rounded-xl 
            shadow-md
            w-[80vw]
            md:w-3/4 
            bg-white 
            overflow-hidden 
            right-0 
            top-12 
            text-sm
          "
        >
          <div className="flex flex-col cursor-pointer">
            {/* Links visible only on small devices */}
            <div className="block md:hidden">
              <MenuItem label="Home" onClick={() => navigate("/")} />
              <MenuItem label="Listings" onClick={() => navigate("/listings")} />
          
              <MenuItem label="Contact" onClick={() => navigate("/contact")} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserMenu;
