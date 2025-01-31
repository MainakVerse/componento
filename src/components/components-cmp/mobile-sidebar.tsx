"use client";
import React from "react";
import CmpUrl from "@/utils/cmp-url";
import { GoDotFill } from "react-icons/go";
import ComponentDataArray from "../../../public/component-data-array";
import { RiMenu5Line } from "react-icons/ri";
import DevButton from "../../../public/dev-components/buttons/(dev-button-v1)/dev-button-v1";
import { useRouter } from "next/navigation";
import DevDrawerV2 from "../../../public/dev-components/drawers/(dev-drawer-v2)/dev-drawer-v2";
import { Drawer } from "vaul";
import SearchModal from "../ui/header-cmp/search-modal";

const MobileSidebar = () => {
    const router = useRouter()
    return (
        <DevDrawerV2
        openBtn={
            <DevButton asIcon size="lg" variant="flat">
                <RiMenu5Line className="text-xl" />
            </DevButton>
        }
        title="Components"
        position="bottom"
    >
         <div className="sticky top-0 !p-1 bg-rtlLight dark:bg-rtlDark">
         <SearchModal bgDrop={false} />
         </div>
        <Drawer.Trigger>
            <ul className="space-y-2">
                {ComponentDataArray.map((item: any, index: number) => (
                    <li
                        onClick={() => router.push(`/components/${CmpUrl(item.name)}`)}
                        key={index}
                        className={`w-full flex group items-center gap-2 hover:text-accentNeon rounded-lg cursor-pointer p-1 px-2 `}
                    >
                        <GoDotFill className="text-xs group-hover:text-accentNeon" />{" "}
                        {item.name}
                    </li>
                ))}
            </ul>
        </Drawer.Trigger>
    </DevDrawerV2>
    );
};

export default MobileSidebar;
