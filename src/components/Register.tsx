import { SignUp } from "@clerk/clerk-react";

const RegisterPage = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <SignUp />
      </div>
    </>
  );
};

export default RegisterPage;
