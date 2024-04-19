import { SelectHTMLAttributes } from 'react'
import styles from './Select.module.css'

interface ISelect extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string
    options: {
        value: string
        text: string
    }
}
export function Select({label, options, ...rest}: ISelect) {
    return 
    <div className={styles.selectGroup}>
        <label>{label}</label>
        <select className={styles.selectBase}>
            {queryOptions.map((option) => ( 
                <option key={option.value} value={option}>
                    {option.text}
                </option>
            ))}
        </select>
    </div>
}