import React from "react";
import {cn} from "@/modules/shared-core/lib/utils";

export default function ContentTabComponent(
    {children, disableBar = false} : { children: React.ReactNode, disableBar?: boolean }
) {
    return (
        <>
            <div
                className={cn(
                    "flex flex-row gap-4 p-4 items-center justify-between",
                    !disableBar && "border-b border-b-white/30"
                )}
            >
                {children}
            </div>

        </>
    )
}
