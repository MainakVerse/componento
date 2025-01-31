import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import dynamic from 'next/dynamic'
import SearchModal from './search-modal'
import ColorSwatch from '@/components/swatch/color-swatch'
const ThemeSwitch = dynamic(() => import('@/components/ui/theme-switch'), { ssr: false })
const MobileSidebar = dynamic(() => import('@/components/components-cmp/mobile-sidebar'), { ssr: false })

const Header = () => {
  return (
    <header className="w-full flex-shrink-0 z-50 backdrop-blur dark:bg-rtlDark bg-rtlLight  border-b border-b-accentNeon/20 flex items-center justify-between p-1 px-2">
      <Link
        href="/"
        className="select-none hover:opacity-80 z-50 top-1 flex items-center text-base  gap-1  p-[2px] rounded-r-full px-4"
      >
        <Image
          src="/assets/logo.png"
          alt="logo"
          width={500}
          height={500}
          className="w-8 select-none "
        />
        <h2 className="md:block hidden select-none text-lg font-bold">
          Componento
        </h2>
      </Link>

      <div className="text-accentNeon flex items-center justify-center gap-2">
        <SearchModal />
        <ColorSwatch/>
        
        <ThemeSwitch />
        <div className="md:hidden">
          <MobileSidebar />
        </div>
      </div>
    </header>
  )
}

export default Header