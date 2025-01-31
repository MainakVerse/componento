"use client";
import React from "react";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ComponentDataArray from "../../../public/component-data-array";
import CmpUrl from "@/utils/cmp-url";
import SearchModal from "../ui/header-cmp/search-modal";

const SideBar = () => {
  const params = usePathname();
  const data = ComponentDataArray.filter(
    (item) => `/components/${CmpUrl(item.name)}` === params
  );
  return (
  params !== "/components" && (
      <div className=" h-[92vh] md:block hidden flex-shrink-0 overflow-y-scroll sticky inset-y-0 border-r border-accentNeon/30 px-3 pb-10">
        <div className=" sticky top-0 bg-white dark:bg-[#0f172a] py-2">
        <SearchModal bgDrop={false}/>
        </div>
        <ul className="space-y-2 md:block hidden  pr-14 mt-4">
          {ComponentDataArray.map((item: any, index: number) => (
            <li
              key={index}
              className={`w-full flex group items-center gap-2 hover:text-accentNeon rounded-lg cursor-pointer p-1 px-2 ${
                data.length > 0 && data[0].name === item.name
                  ? "text-accentNeon"
                  : ""
              } `}
            >
              <GoDotFill className="text-xs group-hover:text-accentNeon" />{" "}
              <Link
                href={`/components/${CmpUrl(item.name)}`}
                className="w-full"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default SideBar;
