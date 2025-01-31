import React from 'react'

const SidebarLdr = () => {
    return (
        <div className="h-screen w-52 border-r border-accentNeon/30 md:block hidden p-5">
            <ul className="space-y-3">
                {
                    [1, 2, 3, 4, 5].map((_,index) => (
                        <li key={index} className="w-full rounded-full h-5 bg-slate-500/30 animate-pulse"></li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SidebarLdr