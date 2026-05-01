import React from "react";

export default function ExpressionNegativeComponent(
    {children} : { children: React.ReactNode }
) {
    return (
        <div className="inline text-red-600 w-fit border-t border-t-red-600">
            {children}
        </div>
    )
}
