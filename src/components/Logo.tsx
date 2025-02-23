import { Link } from "react-router";

const Logo = () => {
  return (
    <>
      <Link to={"/"}>
        <img src="/vite.svg" alt="logo" />
      </Link>
    </>
  );
};

export default Logo;
