import s from "./DisplayCounter.module.css"

type DisplayCounterPropsType = {
    displayValue: number
}

export const DisplayCounter: React.FC<DisplayCounterPropsType> = ({ displayValue }) => {

    return (
        <div className={s.displayCounter}>
            {displayValue}
        </div>
    )

}
