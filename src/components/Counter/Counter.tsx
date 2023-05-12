import { BlockCounter } from "./BlockCounter/BlockCounter"
import { BlockSettings } from './BlockSettings/BlockSettings'
import s from "./Counter.module.css"


export const Counter: React.FC = () => {

  return (
    <div className={s.counterWrapper}>
      <BlockSettings />
      <BlockCounter title={"value"} />
    </div>
  )

}