import styles from './button.module.css'

export const Button = ({ btnText }) => {
    return (
        <button className={styles.btn}>{btnText}</button>
    )
}