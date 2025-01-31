import Link from "next/link";
import React from "react";
import { TbError404 } from "react-icons/tb";

const NotFound = () => {
  return (
    <main className="w-full h-screen grid place-content-center text-center">
      
        <TbError404 className="text-7xl text-accent mx-auto" />
      
      <h1 className="text-2xl font-semibold text-accent">
        Oops! Page Not Found
      </h1>
    <Link href="/" className="text-white/80 text-sm mt-10 hover:text-secondary underline">Back to Home</Link>
    </main>
  );
};

export default NotFound;
