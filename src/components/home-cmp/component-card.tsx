import CmpUrl from "@/utils/cmp-url";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type cardProps = {
  name: string;
  image: string;
  description: string;
  componentsNo: number;
};

const ComponentCard = ({ name, image, componentsNo }: cardProps) => {
  return (
    <Link
      href={`/components/${CmpUrl(name)}`}
      className="w-full flex gap-3 pl-4 p-2 max-h-24 h-24 rounded-xl overflow-hidden items-center border-accentNeon/50 border hover:border-accentNeon hover:bg-accentNeon/20 hover:dark:bg-accentNeon/20 bg-light-primary dark:bg-dark-primary"
    >
      <Image
        src={`/assets/cmp-icons/${image}`}
        alt="logo"
        width={50}
        height={50}
      />
      <span className="pl-3">
        <h2 className="font-semibold text-xl text-ellipsis overflow-hidden">{name}</h2>
        <p className="text-sm text-accentNeon">
          {componentsNo} {componentsNo > 1 ? "components" : "component"}
        </p>
      </span>
    </Link>
  );
};

export default ComponentCard;
