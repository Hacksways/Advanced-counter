import s from "./SuperButton.module.css"

type SuperButtonPropsType = {
    title: string
}

export const SuperButton: React.FC<SuperButtonPropsType> = ({ title }) => {

    return (
        <button className={s.button}>{title}</button>
    )
}