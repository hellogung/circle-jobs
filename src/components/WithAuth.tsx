import { useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router";

const withAuth = (Component: React.FC) => {
  return () => {
    const { isSignedIn } = useAuth();

    if (!isSignedIn) {
      return <Navigate to="/login" />;
    }

    return <Component />;
  };
};

export default withAuth;
