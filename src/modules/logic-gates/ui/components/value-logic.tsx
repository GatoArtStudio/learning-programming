import {ValueLogicType} from "@/modules/logic-gates/types/value-logic.type";
import {cn} from "@/modules/shared-core/lib/utils";

export default function ValueLogic(
    { value } : ValueLogicType
) {
    return (
        <>
            <span
                className={cn(
                    "flex items-center justify-center bg-white h-10 w-14 text-black rounded-md",
                    !value && "bg-black/50 text-white"
                )}
            >
                {value ? (
                    1
                ) : (
                    0
                )}
            </span>
        </>
    )
}