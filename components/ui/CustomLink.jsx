import React from "react";
import Link from "next/link";

const CustomLink = ({
  href,
  children,
  className = "",
  target = "_self",
  rel,
}) => {
  const computedRel = target === "_blank" ? "noopener noreferrer" : rel;
  return (
    <Link
      href={href}
      className={`link link-hover transition-colors duration-200 hover:text-primary ${className}`}
      target={target}
      rel={computedRel}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
