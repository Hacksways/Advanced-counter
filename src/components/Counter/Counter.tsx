import React from 'react'
import s from "./Counter.module.css"


export const Counter = () => {

  return (
    <div className={s.counterWrapper}>
      <div className={s.blockSettings}>
        <div className={s.panelSettings}>
          <div><span>max value:</span><input type="number" /></div>
          <div><span>start value:</span><input type="number" /></div>
        </div>
        <div className={s.panelButtons}>
          <button>set</button>
        </div>
      </div>
      <div className={s.counter}>
        <div className={s.displayCounter}>
          value
        </div>
        <div className={s.panelButtonsCounter}>
        <button>inc</button> <button>reset</button>
        </div>
      </div>
    </div>
  )

}