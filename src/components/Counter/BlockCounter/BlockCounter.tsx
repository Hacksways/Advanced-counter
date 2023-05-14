import {SuperButton} from "../../SuperButton/SuperButton"
import s from "./BlockCounter.module.css"
import {DisplayCounter} from "./DisplayCounter/DisplayCounter"
import React from "react";

type BlockCounterPropsType = {
    displayValue: number | string
    maxValue: number
    disableIncButton: boolean
    disableResetButton: boolean
    incrementValueOnDisplay: () => void
    resetValueOnDisplay: () => void

}

export const BlockCounter: React.FC<BlockCounterPropsType> = ({
                                                                  displayValue,
                                                                  maxValue,
                                                                  disableIncButton,
                                                                  disableResetButton,
                                                                  incrementValueOnDisplay,
                                                                  resetValueOnDisplay
                                                              }) => {

    return (
        <div className={s.blockCounter}>
            <DisplayCounter displayValue={displayValue} maxValue={maxValue}/>
            <div className={s.panelButtonsCounter}>
                <SuperButton title={"inc"} callBack={incrementValueOnDisplay} disable={disableIncButton}/>
                <SuperButton title={"reset"} callBack={resetValueOnDisplay} disable={disableResetButton}/>
            </div>
        </div>
    )

}