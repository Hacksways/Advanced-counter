import React, {useEffect, useReducer} from "react";
import {
    changeMaxValueAC,
    changeStartValueAC,
    counterReducer,
    setStartValueOnDisplayAC,
    toggleButtonIncAC,
    toggleButtonResetAC,
    toggleButtonSetAC
} from "../../state/counterReducer";
import {BlockCounter} from "./BlockCounter/BlockCounter";
import {BlockSettings} from './BlockSettings/BlockSettings';
import s from "./Counter.module.css";


export const Counter: React.FC = () => {

    const [counter, dispatchCounter] = useReducer(counterReducer, {
        maxValue: 5,
        startValue: 0,
        displayValue: 5,
        disableIncButton: false,
        disableResetButton: false,
        disableSetButton: true,
    })

    const {maxValue, startValue, displayValue, disableIncButton, disableResetButton, disableSetButton} = counter

    useEffect(() => {
        const getValueFromLSForMaxValue = localStorage.getItem("maxValue")
        const getValueFromLSForStartValue = localStorage.getItem("startValue")
        const getValueFromLSForDisplayValue = localStorage.getItem("displayValue")
        if (getValueFromLSForMaxValue) {
            dispatchCounter(changeMaxValueAC(JSON.parse(getValueFromLSForMaxValue)))
        }
        if (getValueFromLSForStartValue) {
            dispatchCounter(changeStartValueAC(JSON.parse(getValueFromLSForStartValue)))
        }
        if (getValueFromLSForDisplayValue) {
            dispatchCounter(setStartValueOnDisplayAC(JSON.parse(getValueFromLSForDisplayValue)))
        }


    }, [])

    useEffect(() => {
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
        localStorage.setItem("startValue", JSON.stringify(startValue))
        localStorage.setItem("displayValue", JSON.stringify(displayValue))
        if (+displayValue >= maxValue) {
            dispatchCounter(toggleButtonIncAC(true))
        }
        if ((maxValue <= startValue) || (displayValue === "enter values and press 'set'") || (displayValue === "incorrect value!")) {
            dispatchCounter(toggleButtonIncAC(true))
            dispatchCounter(toggleButtonResetAC(true))
        }
    }, [maxValue, startValue, displayValue])


    const changeMaxValue = (n: number) => {
        dispatchCounter(changeMaxValueAC(n))
        dispatchCounter(toggleButtonIncAC(true))
        dispatchCounter(toggleButtonResetAC(true))
        dispatchCounter(setStartValueOnDisplayAC("enter values and press 'set'"))
        dispatchCounter(toggleButtonSetAC(false))
        if ((n < 0) || (startValue < 0) || (n <= startValue)) {
            dispatchCounter(toggleButtonSetAC(true))
            dispatchCounter(setStartValueOnDisplayAC("incorrect value!"))
        }
    }

    const changeStartValue = (n: number) => {
        dispatchCounter(changeStartValueAC(n))
        dispatchCounter(toggleButtonIncAC(true))
        dispatchCounter(toggleButtonResetAC(true))
        dispatchCounter(setStartValueOnDisplayAC("enter values and press 'set'"))
        dispatchCounter(toggleButtonSetAC(false))
        if ((n < 0) || (maxValue < 0) || (maxValue <= n)) {
            dispatchCounter(toggleButtonSetAC(true))
            dispatchCounter(setStartValueOnDisplayAC("incorrect value!"))
        }
    }

    //OnClick button "set"
    const setStartValueOnDisplay = () => {
        dispatchCounter(setStartValueOnDisplayAC(startValue))
        dispatchCounter(toggleButtonIncAC(false))
        dispatchCounter(toggleButtonResetAC(false))
        dispatchCounter(toggleButtonSetAC(true))
    }
    //OnClick button "inc"
    const incrementValueOnDisplay = () => {
        if (typeof displayValue === "number") {
            const newDisplayValue = displayValue + 1
            dispatchCounter(setStartValueOnDisplayAC(newDisplayValue))
            if (newDisplayValue >= maxValue) {
                dispatchCounter(toggleButtonIncAC(true))
            }
        }
    }
    //OnClick button "reset"
    const resetValueOnDisplay = () => {
        dispatchCounter(setStartValueOnDisplayAC(0))
        dispatchCounter(toggleButtonIncAC(false))
    }


    return (
        <div className={s.counterWrapper}>
            <BlockSettings startValue={startValue} changeStartValue={changeStartValue} maxValue={maxValue}
                           changeMaxValue={changeMaxValue} setStartValueOnDisplay={setStartValueOnDisplay}
                           disableSetButton={disableSetButton}/>
            <BlockCounter displayValue={displayValue} maxValue={maxValue}
                          incrementValueOnDisplay={incrementValueOnDisplay} resetValueOnDisplay={resetValueOnDisplay}
                          disableIncButton={disableIncButton} disableResetButton={disableResetButton}/>
        </div>
    )

}