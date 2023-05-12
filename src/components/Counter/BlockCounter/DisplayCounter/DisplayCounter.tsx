import s from "./DisplayCounter.module.css"

type DisplayCounterPropsType = {
    title: string
}

export const DisplayCounter: React.FC<DisplayCounterPropsType> = ({ title }) => {

    return (
        <div className={s.displayCounter}>
            {title}
        </div>
    )

}
