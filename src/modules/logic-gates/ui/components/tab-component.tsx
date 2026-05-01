import React from "react";

export default function TabComponent(
    {children} : { children: React.ReactNode}
) {
    return (
        <div
            className="flex flex-col min-w-full bg-white/10 px-5 rounded-xl border border-white/30"
        >
            {children}
        </div>
    )
}
