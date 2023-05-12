import { SuperButton } from "../../SuperButton/SuperButton"
import s from "./BlockSettings.module.css"
import { PanelSettings } from "./PanelSettings/PanelSettings"

export const BlockSettings = () => {

    return (
        <div className={s.blockSettings}>
            <PanelSettings />
            <div className={s.panelButtons}>
                <SuperButton title={"set"} />
            </div>
        </div>
    )
}