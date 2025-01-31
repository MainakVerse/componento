"use client";
import { Drawer } from "vaul";

interface DevDrawerProps {
    openBtn: React.ReactNode
    children: React.ReactNode
    position?: 'left' | 'right' | 'top' | 'bottom'
}
export default function VaulDrawer({ children = null, position = 'top', openBtn = null }: DevDrawerProps) {
    return (
        <Drawer.Root direction={position} shouldScaleBackground>
            <Drawer.Trigger asChild>
                {openBtn}
            </Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/50 z-50" />
                <Drawer.Content className={`z-50 bg-rtlLight dark:bg-rtlDark inset-x-0 rounded-t-xl fixed p-3 border-accentNeon overflow-hidden bottom-0`}>
                    <div className="overflow-y-scroll max-h-[75vh]  ">
                        <Drawer.Trigger>
                            {children}
                        </Drawer.Trigger>
                    </div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
}