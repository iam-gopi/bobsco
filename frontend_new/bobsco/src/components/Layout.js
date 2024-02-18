import React from "react";
import Nav from "./nav";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="max-w-12xl sm:h-12 h-20 grid sm:grid-cols-2">
        <div className="text-center h-full text-white bg-primaryDarkBlue  flex justify-center items-center">
          <p>Welcome to Bobsco Edu</p>
        </div>
        <div className="bg-primaryRed h-full flex justify-center items-center  text-white gap-6">
          <p className="hover:cursor-pointe">
            <a href="mailto:enquiry@vedhikeschools.com">
              enquiry@vedhikeschools.com
            </a>
          </p>
          <p>+91 484 452 77 99</p>
        </div>
      </div>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
