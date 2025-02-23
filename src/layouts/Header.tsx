import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Link } from "react-router";
import Logo from "../components/Logo";

const menu = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Profile",
    link: "/profile",
  },
];

const Header = () => {
  return (
    <>
      <header className="fixed w-full flex justify-between items-center bg-blue-500 md:px-10 p-3 z-10">
        <Logo />
        <nav id="menu" className="flex gap-x-10">
          {menu.map((item, index) => (
            <Link
              key={index}
              className="font-semibold text-white"
              to={item.link}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div id="profile">
          <SignedOut>
            <SignInButton>
              <button className="bg-blue-300 rounded-4xl">
                Custom sign in button
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </header>
    </>
  );
};

export default Header;
