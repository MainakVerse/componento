import React from "react";
import RenderComponents from "@/components/home-cmp/render-components";
import dynamic from "next/dynamic";
const SearchModal = dynamic(
  () => import("@/components/ui/header-cmp/search-modal"),
  {
    ssr: false,
    loading: () => <div className="w-full max-w-lg h-10 border border-accentNeon/50 rounded-full bg-rtlLight dark:bg-rtlDark animate-pulse"/>,
  }
);

const page = () => {
  return (
    <main className="w-full max-w-7xl flex flex-col mx-auto h-full">
      <div className="absolute h-52 inset-0 -z-10 opacity-60"></div>

      <section className="w-full text-center p-5 z-10 space-y-3 md:max-w-lg sticky md:relative top-0 md:backdrop-blur-0 backdrop-blur-sm rounded-b-xl shadow-md md:shadow-none border-b border-accentNeon/50 md:border-none mx-auto pt-5">
        <h1 className="text-3xl md:text-5xl font-bold select-none relative">
          Component-<span className="text-6xl text-accentNeon">o</span>
          
        </h1>
        <p className=" opacity-80 font-normal text-center text-sm">
          Get the best components for your trendy modern website for free. 
        </p>

        <SearchModal />
      </section>

      <section className="flex-grow grid grid-cols-1 md:grid-cols-4 p-3 my-5 w-full max-w-5xl mx-auto gap-3">
        <RenderComponents />
      </section>
    </main>
  );
};

export default page;
