import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content p-8">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex flex-row items-center justify-center gap-2">
          <Logo />
          <p className="text-lg font-bold">ACTivate</p>
        </div>
        <p className="font-bold mt-2">Providing reliable tech since 1992</p>
        <p className="mt-4">
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
