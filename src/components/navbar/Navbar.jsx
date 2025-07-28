import Container from "../Container";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import { useSelector } from 'react-redux';

function Navbar() {
  

  return (
    <>
      <div className="fixed w-full bg-white z-10 shadow-sm">
        <div className="py-4 border-b-[1px]">
          <Container>
            <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
              {/* Logo should be visible on all devices */}
              <div className="flex-shrink-0">
                <Logo />
              </div>

              {/* User Menu should align to the right */}
              <div className="ml-auto">
                <UserMenu  />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Navbar;
