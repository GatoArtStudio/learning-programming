"use client"

import {ButtonLogicBoolType} from "@/modules/logic-gates/types/button-logic-bool.type";

export default function ButtonLogicBool(
    { value, setValue } : ButtonLogicBoolType
) {

    return (
        <>
            <button
                className="bg-white/10 h-10 w-10 text-white rounded-md border border-white/30"
                onClick={() => setValue(!value)}
            >
                {value ? (
                    1
                ) : (
                    0
                )}
            </button>
        </>
    )
}