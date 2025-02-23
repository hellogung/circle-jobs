import { SignIn } from "@clerk/clerk-react";
import { Link } from "react-router";

const LoginPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <SignIn />
        <Link to="/" className="mt-10 px-3 py-2 font-semibold border rounded-lg">Back to Home</Link>
      </div>
    </>
  );
};

export default LoginPage;
