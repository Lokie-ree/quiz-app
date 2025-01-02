import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        alt="ACTivate Brand Logo"
        height={28}
        width={28}
        className="mask mask-squircle shadow-lg"
        priority
      />
    </Link>
  );
};

export default Logo;
