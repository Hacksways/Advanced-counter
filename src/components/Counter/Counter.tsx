import React, {useEffect} from "react";
import {
    changeMaxValueAC,
    changeStartValueAC,
    CounterStateType,
    setStartValueOnDisplayAC,
    toggleButtonIncAC,
    toggleButtonResetAC,
    toggleButtonSetAC
} from "../../state/counterReducer";
import {BlockCounter} from "./BlockCounter/BlockCounter";
import {BlockSettings} from './BlockSettings/BlockSettings';
import s from "./Counter.module.css";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../../state/store";


export const Counter: React.FC = () => {

    const {
        maxValue,
        startValue,
        displayValue,
        disableIncButton,
        disableResetButton,
        disableSetButton
    } = useSelector<RootReducerType, CounterStateType>(state => state.counter)

    const dispatch = useDispatch()

    useEffect(() => {
        const getValueFromLSForMaxValue = localStorage.getItem("maxValue")
        const getValueFromLSForStartValue = localStorage.getItem("startValue")
        const getValueFromLSForDisplayValue = localStorage.getItem("displayValue")
        if (getValueFromLSForMaxValue) {
            dispatch(changeMaxValueAC(JSON.parse(getValueFromLSForMaxValue)))
        }
        if (getValueFromLSForStartValue) {
            dispatch(changeStartValueAC(JSON.parse(getValueFromLSForStartValue)))
        }
        if (getValueFromLSForDisplayValue) {
            dispatch(setStartValueOnDisplayAC(JSON.parse(getValueFromLSForDisplayValue)))
        }


    }, [dispatch])

    useEffect(() => {
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
        localStorage.setItem("startValue", JSON.stringify(startValue))
        localStorage.setItem("displayValue", JSON.stringify(displayValue))
        if (+displayValue >= maxValue) {
            dispatch(toggleButtonIncAC(true))
        }
        if (maxValue <= startValue || displayValue === "enter values and press 'set'" || displayValue === "incorrect value!") {
            dispatch(toggleButtonIncAC(true))
            dispatch(toggleButtonResetAC(true))
        }
    }, [dispatch, maxValue, startValue, displayValue])


    const changeMaxValue = (n: number) => {
        dispatch(changeMaxValueAC(n))
        dispatch(toggleButtonIncAC(true))
        dispatch(toggleButtonResetAC(true))
        dispatch(setStartValueOnDisplayAC("enter values and press 'set'"))
        dispatch(toggleButtonSetAC(false))
        if ((n < 0) || (startValue < 0) || (n <= startValue)) {
            dispatch(toggleButtonSetAC(true))
            dispatch(setStartValueOnDisplayAC("incorrect value!"))
        }
    }

    const changeStartValue = (n: number) => {
        dispatch(changeStartValueAC(n))
        dispatch(toggleButtonIncAC(true))
        dispatch(toggleButtonResetAC(true))
        dispatch(setStartValueOnDisplayAC("enter values and press 'set'"))
        dispatch(toggleButtonSetAC(false))
        if ((n < 0) || (maxValue < 0) || (maxValue <= n)) {
            dispatch(toggleButtonSetAC(true))
            dispatch(setStartValueOnDisplayAC("incorrect value!"))
        }
    }

    //OnClick button "set"
    const setStartValueOnDisplay = () => {
        dispatch(setStartValueOnDisplayAC(startValue))
        dispatch(toggleButtonIncAC(false))
        dispatch(toggleButtonResetAC(false))
        dispatch(toggleButtonSetAC(true))
    }
    //OnClick button "inc"
    const incrementValueOnDisplay = () => {
        if (typeof displayValue === "number") {
            const newDisplayValue = displayValue + 1
            dispatch(setStartValueOnDisplayAC(newDisplayValue))
            if (newDisplayValue >= maxValue) {
                dispatch(toggleButtonIncAC(true))
            }
        }
    }
    //OnClick button "reset"
    const resetValueOnDisplay = () => {
        dispatch(setStartValueOnDisplayAC(0))
        dispatch(toggleButtonIncAC(false))
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