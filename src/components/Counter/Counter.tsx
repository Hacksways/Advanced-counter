import React, {useState} from "react"
import {BlockCounter} from "./BlockCounter/BlockCounter"
import {BlockSettings} from './BlockSettings/BlockSettings'
import s from "./Counter.module.css"


export const Counter: React.FC = () => {

    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [displayValue, setDisplayValue] = useState<number>(startValue)
    const [disable, setDisable] = useState<boolean>(false)

    const changeStartValue = (n: number) => {
        setStartValue(n)
    }
    const changeMaxValue = (n: number) => {
        setMaxValue(n)
    }
    const setStartValueOnDisplay = () => {
        setDisplayValue(startValue)
        setDisable(false)
    }
    const incrementValueOnDisplay = () => {
        const newDisplayValue = displayValue + 1

        setDisplayValue(newDisplayValue)

        if (newDisplayValue >= maxValue) {
            setDisable(true)
        }
    }
    const resetValueOnDisplay = () => {
        setDisplayValue(0)
        setDisable(false)
    }


    return (
        <div className={s.counterWrapper}>
            <BlockSettings startValue={startValue} changeStartValue={changeStartValue} maxValue={maxValue}
                           changeMaxValue={changeMaxValue} setStartValueOnDisplay={setStartValueOnDisplay}/>
            <BlockCounter displayValue={displayValue} setDisplayValue={setDisplayValue}
                          incrementValueOnDisplay={incrementValueOnDisplay} resetValueOnDisplay={resetValueOnDisplay}
                          disable={disable}/>
        </div>
    )

}