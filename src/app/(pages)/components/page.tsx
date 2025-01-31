import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className=" w-full grid gap-4 place-items-center p-1 md:max-w-2xl mx-auto">
     <Image src="/assets/logo.svg" alt="logo" width={500} height={500}  className="w-40"/>
     <div className="text-center space-y-3"><h1 className="text-2xl text-accentNeon font-semibold">Componento - Fully Customizable React Components</h1>
     <p className="opacity-80 text-pretty text-sm">Discover Dev Components, a unique platform providing fully customizable React components in TSX/JSX, seamlessly styled with Tailwind CSS. Unlock productivity and efficiency with our ready-to-use, highly flexible UI elements.</p>
     </div>

     <Link href="/components/buttons" className="bg-accentNeon/20 border active:opacity-80 text-accentNeon border-accentNeon rounded-full p-1 px-4">Get Started</Link>
    </section>
  );
};

export default page;
