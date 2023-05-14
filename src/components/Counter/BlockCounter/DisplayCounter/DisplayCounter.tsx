import s from "./DisplayCounter.module.css"
import React from "react";

type DisplayCounterPropsType = {
    displayValue: number | string
    maxValue: number
}

export const DisplayCounter: React.FC<DisplayCounterPropsType> = ({displayValue, maxValue}) => {
    const displayClass = `${s.displayCounter} ${displayValue === maxValue || displayValue === "incorrect value!" ? s.error : ""}`

    return (
        <div className={displayClass}>
            {displayValue}
        </div>
    )

}
