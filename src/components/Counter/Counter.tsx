import React, {useEffect, useState} from "react"
import {BlockCounter} from "./BlockCounter/BlockCounter"
import {BlockSettings} from './BlockSettings/BlockSettings'
import s from "./Counter.module.css"


export const Counter: React.FC = () => {
    //For inputs settings
    const [maxValue, setMaxValue] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(0)
    //For display
    const [displayValue, setDisplayValue] = useState<number | string>(startValue)
    //For buttons status disable On/Off
    const [disableIncButton, setDisableIncButton] = useState<boolean>(false)
    const [disableResetButton, setDisableResetButton] = useState<boolean>(false)
    const [disableSetButton, setDisableSetButton] = useState<boolean>(true)

    useEffect(()=>{
        const getValueFromLSForMaxValue = localStorage.getItem("maxValue")
        const getValueFromLSForStartValue = localStorage.getItem("startValue")
        const getValueFromLSForDisplayValue = localStorage.getItem("displayValue")
        if(getValueFromLSForMaxValue){
            setMaxValue(JSON.parse(getValueFromLSForMaxValue))
        }
        if(getValueFromLSForStartValue){
            setStartValue(JSON.parse(getValueFromLSForStartValue))
        }
        if(getValueFromLSForDisplayValue){
            setDisplayValue(JSON.parse(getValueFromLSForDisplayValue))
        }


    },[])

    useEffect(() => {
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
        localStorage.setItem("startValue", JSON.stringify(startValue))
        localStorage.setItem("displayValue", JSON.stringify(displayValue))
        if (displayValue >= maxValue){
            setDisableIncButton(true)
        }
        if (maxValue <= startValue || displayValue==="enter values and press 'set'" || displayValue==="incorrect value!"){
            setDisableIncButton(true)
            setDisableResetButton(true)
        }
    }, [maxValue, startValue, displayValue])


    const changeMaxValue = (n: number) => {
        setMaxValue(n)
        setDisableIncButton(true)
        setDisableResetButton(true)
        setDisplayValue("enter values and press 'set'")
        setDisableSetButton(false)
        if (n < 0 || startValue < 0 || n <= startValue) {
            setDisableSetButton(true)
            setDisplayValue("incorrect value!")
        }
    }

    const changeStartValue = (n: number) => {
        setStartValue(n)
        setDisableIncButton(true)
        setDisableResetButton(true)
        setDisplayValue("enter values and press 'set'")
        setDisableSetButton(false)
        if (n < 0 || maxValue < 0 || maxValue <= n) {
            setDisableSetButton(true)
            setDisplayValue("incorrect value!")
        }
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
        if (typeof displayValue === "number") {
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
                           changeMaxValue={changeMaxValue} setStartValueOnDisplay={setStartValueOnDisplay}
                           disableSetButton={disableSetButton}/>
            <BlockCounter displayValue={displayValue} maxValue={maxValue}
                          incrementValueOnDisplay={incrementValueOnDisplay} resetValueOnDisplay={resetValueOnDisplay}
                          disableIncButton={disableIncButton} disableResetButton={disableResetButton}/>
        </div>
    )

}