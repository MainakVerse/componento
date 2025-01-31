import React from 'react'

const SideNavLdr = () => {
    return (
        <div className="h-screen w-52 border-l border-accentNeon/30 md:block hidden p-5">
            <h2>Sub Components</h2>
            <ul className="space-y-3 mt-2">
                {
                    [1, 2].map((_,index) => (
                        <li key={index} className="w-full rounded-full h-5 bg-slate-500/30 animate-pulse"></li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SideNavLdr