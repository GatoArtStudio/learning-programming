import React from "react";

export interface ButtonLogicBoolType {
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
}