import {SuperInput} from "../../../SuperInput/SuperInput"
import s from "./PanelSettings.module.css"
import React from "react";

type PanelSettingsPropsType = {
    startValue: number
    changeStartValue: (n: number) => void
    maxValue: number
    changeMaxValue: (n: number) => void
}

export const PanelSettings: React.FC<PanelSettingsPropsType> = ({
                                                                    startValue,
                                                                    changeStartValue,
                                                                    maxValue,
                                                                    changeMaxValue
                                                                }) => {
    const superInputErrorClass = `${s.panelSettings} ${maxValue <= startValue ? s.error: ''}`

    return (
        <div className={superInputErrorClass}>
            <SuperInput title={"max value:"} inputType={"number"} value={maxValue} callBack={changeMaxValue}/>
            <SuperInput title={"start value:"} inputType={"number"} value={startValue} callBack={changeStartValue} />
        </div>
    )
}