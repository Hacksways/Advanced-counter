import s from "./SuperButton.module.css"
import React from "react";

type SuperButtonPropsType = {
    title: string
    disable: boolean
    callBack: () => void
}

export const SuperButton: React.FC<SuperButtonPropsType> = ({title, disable, callBack}) => {

    return (
        <button className={s.button} disabled={disable} onClick={callBack}>{title}</button>
    )
}