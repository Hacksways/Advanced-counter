import React, {useState} from "react"
import {BlockCounter} from "./BlockCounter/BlockCounter"
import {BlockSettings} from './BlockSettings/BlockSettings'
import s from "./Counter.module.css"


export const Counter: React.FC = () => {
    //For inputs settings
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    //For display
    const [displayValue, setDisplayValue] = useState<number | string>(startValue)
    //For buttons status disable On/Off
    const [disableIncButton, setDisableIncButton] = useState<boolean>(false)
    const [disableResetButton, setDisableResetButton] = useState<boolean>(false)
    const [disableSetButton, setDisableSetButton] = useState<boolean>(true)

    const changeStartValue = (n: number) => {
        setStartValue(n)
        setDisableIncButton(true)
        setDisableResetButton(true)
        setDisplayValue("enter values and press 'set'")
        setDisableSetButton(false)
    }
    const changeMaxValue = (n: number) => {
        setMaxValue(n)
        setDisableIncButton(true)
        setDisableResetButton(true)
        setDisplayValue("enter values and press 'set'")
        setDisableSetButton(false)
    }
    //OnClick button "set"
    const setStartValueOnDisplay = () => {
        setDisplayValue(startValue)
        setDisableIncButton(false)
        setDisableResetButton(false)
        setDisableSetButton(true)
    }
    //OnClick button "inc"
    const incrementValueOnDisplay = () => {
        if (typeof displayValue === "number"){
            const newDisplayValue = displayValue + 1
            setDisplayValue(newDisplayValue)
            if (newDisplayValue >= maxValue) {
                setDisableIncButton(true)
            }
        }
    }
    //OnClick button "reset"
    const resetValueOnDisplay = () => {
        setDisplayValue(0)
        setDisableIncButton(false)
    }


    return (
        <div className={s.counterWrapper}>
            <BlockSettings startValue={startValue} changeStartValue={changeStartValue} maxValue={maxValue}
                           changeMaxValue={changeMaxValue} setStartValueOnDisplay={setStartValueOnDisplay} disableSetButton={disableSetButton}/>
            <BlockCounter displayValue={displayValue} maxValue={maxValue} setDisplayValue={setDisplayValue}
                          incrementValueOnDisplay={incrementValueOnDisplay} resetValueOnDisplay={resetValueOnDisplay}
                          disableIncButton={disableIncButton} disableResetButton={disableResetButton}/>
        </div>
    )

}