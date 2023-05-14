import s from "./SuperButton.module.css"
import React from "react";

type SuperButtonPropsType = {
    title: string
    disable: boolean
    callBack: () => void
}

export const SuperButton: React.FC<SuperButtonPropsType> = ({title, disable, callBack}) => {
    const onClickButtonHandler = () => {
        callBack()
    }

    return (
        <button className={s.button} disabled={disable} onClick={onClickButtonHandler}>{title}</button>
    )
}