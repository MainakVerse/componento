"use client";
import { usePathname } from "next/navigation";
import React from "react";
import CmpUrl from "@/utils/cmp-url";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import ComponentDataArray from "../../../public/component-data-array";

const Pagination = () => {
  const path = usePathname();

  const getCurrentIndex = () => {
    return ComponentDataArray.findIndex(
      (item) => `/components/${CmpUrl(item?.name)}` === path
    );
  };

  const getData = () => {
    const currentIndex = getCurrentIndex();
    if (currentIndex === -1) {
      // console.log("Component not found");
      return { current: null, prev: null, next: null };
    }
    const prevIndex =
      currentIndex > 0 ? currentIndex - 1 : ComponentDataArray.length - 1;
    const nextIndex = (currentIndex + 1) % ComponentDataArray.length;
    return {
      current: ComponentDataArray[currentIndex],
      prev: ComponentDataArray[prevIndex],
      next: ComponentDataArray[nextIndex],
    };
  };

  const { current, prev, next } = getData();

  if (!current) {
    return null; // or some fallback UI
  }

  return (
    <div className="w-full flex items-center justify-between">
      {prev && (
        <Link
          href={`/components/${CmpUrl(prev.name)}`}
          className="hover:bg-accentNeon/30 p-1 justify-center text-sm rounded-full px-3 text-accentNeon flex items-center gap-1"
        >
          <FaChevronLeft />
          {prev.name}
        </Link>
      )}
      {next && (
        <Link
          href={`/components/${CmpUrl(next.name)}`}
          className="hover:bg-accentNeon/30 p-1 justify-center text-sm rounded-full px-3 text-accentNeon flex items-center gap-1"
        >
          {next.name}
          <FaChevronRight />
        </Link>
      )}
    </div>
  );
};

export default Pagination;