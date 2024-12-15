import Image from "next/image";
import Link from "next/link";
import React from "react";
import Theme from "./Theme";
import Search from "@/components/search/Search";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/images/site-logo.png"
          width={32}
          height={32}
          alt="LifeChain Logo"
        />

        <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Life<span className="text-primary-500">cha.in</span>
        </p>
      </Link>

      <Search
        route="/"
        imgSrc="/icons/search.svg"
        placeholder="Search publications..."
        otherClasses="flex-1"
      />

      <div className="flex-between gap-5">
        <Theme />
      </div>
    </nav>
  );
};

export default Navbar;
