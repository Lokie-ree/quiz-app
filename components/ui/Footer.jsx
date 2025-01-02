import React from "react";
import Logo from "./Logo";
import CustomLink from "./CustomLink";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content p-6 sm:p-8">
      <div className="flex flex-col items-center gap-2">
        {/* Links Section */}
        <div className="flex flex-wrap justify-center gap-6 mt-2 mb-6">
          <CustomLink href="/about" aria-label="About Us">
            About
          </CustomLink>
          <CustomLink href="/pricing" aria-label="Pricing Information">
            Pricing
          </CustomLink>
          <CustomLink href="/faqs" aria-label="Frequently Asked Questions">
            FAQs
          </CustomLink>
          <CustomLink href="/policy" aria-label="Privacy Policy">
            Policy
          </CustomLink>
          <CustomLink
            href="/terms-and-conditions"
            aria-label="Terms and Conditions"
          >
            Terms & Conditions
          </CustomLink>
        </div>

        {/* Logo and Tagline */}
        <div className="flex items-center gap-2">
          <Logo />
          <p className="font-bold">Providing reliable tech since 2024</p>
        </div>

        <p className="mt-6 text-sm text-gray-400 text-center">
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
