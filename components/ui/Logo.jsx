import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        alt="ACTivate Brand Logo"
        height={44}
        width={44}
        className="mask mask-squircle shadow-lg"
        priority
      />
    </Link>
  );
};

export default Logo;
