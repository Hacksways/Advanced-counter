import { SuperButton } from "../../SuperButton/SuperButton"
import s from "./BlockCounter.module.css"
import { DisplayCounter } from "./DisplayCounter/DisplayCounter"

type BlockCounterPropsType = {
    title: string
}

export const BlockCounter: React.FC<BlockCounterPropsType> = ({ title }) => {

    return (
        <div className={s.blockCounter}>
            <DisplayCounter title={title} />
            <div className={s.panelButtonsCounter}>
                <SuperButton title={"inc"} />
                <SuperButton title={"reset"} />
            </div>
        </div>
    )

}