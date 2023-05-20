import React, {useEffect, useReducer} from "react"
import {BlockCounter} from "./BlockCounter/BlockCounter"
import {BlockSettings} from './BlockSettings/BlockSettings'
import s from "./Counter.module.css"
import {changeMaxValueAC, maxValueReducer} from "../../state/maxValueReducer";
import {changeStartValueAC, startValueReducer} from "../../state/startValueReducer";
import {displayValueReducer, setStartValueOnDisplayAC} from "../../state/displayValueReducer";
import {disableIncButtonReducer, toggleButtonIncAC} from "../../state/disableIncButtonReducer";
import {disableResetButtonReducer, toggleButtonResetAC} from "../../state/disableResetButtonReducer";
import {disableSetButtonReducer, toggleButtonSetAC} from "../../state/disableSetButtonReducer";


export const Counter: React.FC = () => {
    //For inputs settings
    const [maxValue, dispatchMaxValue] = useReducer(maxValueReducer, 5)
    const [startValue, dispatchStartValue] = useReducer(startValueReducer, 0)
    //For display
    const [displayValue, dispatchDisplayValue] = useReducer(displayValueReducer, startValue)
    //For buttons status disable On/Off
    const [disableIncButton, dispatchDisableIncButton] = useReducer(disableIncButtonReducer, false)
    const [disableResetButton, dispatchDisableResetButton] = useReducer(disableResetButtonReducer, false)
    const [disableSetButton, dispatchDisableSetButton] = useReducer(disableSetButtonReducer, true)

    useEffect(() => {
        const getValueFromLSForMaxValue = localStorage.getItem("maxValue")
        const getValueFromLSForStartValue = localStorage.getItem("startValue")
        const getValueFromLSForDisplayValue = localStorage.getItem("displayValue")
        if (getValueFromLSForMaxValue) {
            dispatchMaxValue(changeMaxValueAC(JSON.parse(getValueFromLSForMaxValue)))
        }
        if (getValueFromLSForStartValue) {
            dispatchStartValue(changeStartValueAC(JSON.parse(getValueFromLSForStartValue)))
        }
        if (getValueFromLSForDisplayValue) {
            dispatchDisplayValue(setStartValueOnDisplayAC(JSON.parse(getValueFromLSForDisplayValue)))
        }


    }, [])

    useEffect(() => {
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
        localStorage.setItem("startValue", JSON.stringify(startValue))
        localStorage.setItem("displayValue", JSON.stringify(displayValue))
        if (displayValue >= maxValue) {
            dispatchDisableIncButton(toggleButtonIncAC(true))
        }
        if (maxValue <= startValue || displayValue === "enter values and press 'set'" || displayValue === "incorrect value!") {
            dispatchDisableIncButton(toggleButtonIncAC(true))
            dispatchDisableResetButton(toggleButtonResetAC(true))
        }
    }, [maxValue, startValue, displayValue])


    const changeMaxValue = (n: number) => {
        dispatchMaxValue(changeMaxValueAC(n))
        dispatchDisableIncButton(toggleButtonIncAC(true))
        dispatchDisableResetButton(toggleButtonResetAC(true))
        dispatchDisplayValue(setStartValueOnDisplayAC("enter values and press 'set'"))
        dispatchDisableSetButton(toggleButtonSetAC(false))
        if (n < 0 || startValue < 0 || n <= startValue) {
            dispatchDisableSetButton(toggleButtonSetAC(true))
            dispatchDisplayValue(setStartValueOnDisplayAC("incorrect value!"))
        }
    }

    const changeStartValue = (n: number) => {
        dispatchStartValue(changeStartValueAC(n))
        dispatchDisableIncButton(toggleButtonIncAC(true))
        dispatchDisableResetButton(toggleButtonResetAC(true))
        dispatchDisplayValue(setStartValueOnDisplayAC("enter values and press 'set'"))
        dispatchDisableSetButton(toggleButtonSetAC(false))
        if (n < 0 || maxValue < 0 || maxValue <= n) {
            dispatchDisableSetButton(toggleButtonSetAC(true))
            dispatchDisplayValue(setStartValueOnDisplayAC("incorrect value!"))
        }
    }

    //OnClick button "set"
    const setStartValueOnDisplay = () => {
        dispatchDisplayValue(setStartValueOnDisplayAC(startValue))
        dispatchDisableIncButton(toggleButtonIncAC(false))
        dispatchDisableResetButton(toggleButtonResetAC(false))
        dispatchDisableSetButton(toggleButtonSetAC(true))
    }
    //OnClick button "inc"
    const incrementValueOnDisplay = () => {
        if (typeof displayValue === "number") {
            const newDisplayValue = displayValue + 1
            dispatchDisplayValue(setStartValueOnDisplayAC(newDisplayValue))
            if (newDisplayValue >= maxValue) {
                dispatchDisableIncButton(toggleButtonIncAC(true))
            }
        }
    }
    //OnClick button "reset"
    const resetValueOnDisplay = () => {
        dispatchDisplayValue(setStartValueOnDisplayAC(0))
        dispatchDisableIncButton(toggleButtonIncAC(false))
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