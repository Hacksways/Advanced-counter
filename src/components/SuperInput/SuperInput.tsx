import s from './SuperInput.module.css'
type SuperInputPropsType = {
    title: string
    inputType: string
}

export const SuperInput: React.FC<SuperInputPropsType> = ({ title, inputType }) => {

    return (
        <div className={s.superInput}><span>{title}</span><input className={s.input} type={inputType} /></div>
    )
}