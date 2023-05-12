import { SuperInput } from "../../../SuperInput/SuperInput"
import s from "./PanelSettings.module.css"
export const PanelSettings = () => {

    return (
        <div className={s.panelSettings}>
            <SuperInput title={"max value:"} inputType={"number"} />
            <SuperInput title={"start value:"} inputType={"number"} />
        </div>
    )
}