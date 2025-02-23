import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <>
      <div className="bg-cover bg-center bg-[url('/bg.jpg')]">
        <Header />
        <div className="w-11/12 md:w-3/4 mx-auto min-h-screen">
          <main className="pt-20">
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
