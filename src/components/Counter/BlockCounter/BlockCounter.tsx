import {SuperButton} from "../../SuperButton/SuperButton"
import s from "./BlockCounter.module.css"
import {DisplayCounter} from "./DisplayCounter/DisplayCounter"
import React from "react";

type BlockCounterPropsType = {
    displayValue: number
    disable: boolean
    setDisplayValue: (n: number) => void
    incrementValueOnDisplay: () => void
    resetValueOnDisplay: () => void

}

export const BlockCounter: React.FC<BlockCounterPropsType> = ({
                                                                  displayValue,
                                                                  disable,
                                                                  setDisplayValue,
                                                                  incrementValueOnDisplay,
                                                                  resetValueOnDisplay
                                                              }) => {

    return (
        <div className={s.blockCounter}>
            <DisplayCounter displayValue={displayValue}/>
            <div className={s.panelButtonsCounter}>
                <SuperButton title={"inc"} callBack={incrementValueOnDisplay} disable={disable}/>
                <SuperButton title={"reset"} callBack={resetValueOnDisplay}/>
            </div>
        </div>
    )

}