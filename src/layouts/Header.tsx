import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/clerk-react";
import Logo from "../components/Logo";
import Modal from "../components/Modal";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="fixed w-full  bg-white/70 backdrop-blur-xs py-3 z-10">
        <div className="w-11/12 md:w-3/4 mx-auto flex justify-between items-center">
          <Logo />
          <div id="profile">
            <SignedOut>
              <div className="flex gap-x-3">
                <button
                  onClick={() => setIsOpen(true)}
                  className="bg-blue-500  text-white px-4 py-1 font-semibold rounded cursor-pointer transition-all duration-300"
                >
                  Login / Register
                </button>
              </div>
            </SignedOut>
            <SignedIn>
              <UserButton showName />
            </SignedIn>
          </div>
        </div>
      </header>

      <Modal isOpen={isOpen} padding={false} onClose={() => setIsOpen(false)}>
        <SignIn />
      </Modal>
    </>
  );
};

export default Header;
