import { Button } from "../Button";
import styles from './input.module.css'

const Submit = (e) => {
    e.preventDefault()
}

export const Input = ({ id, type, name, placeholder, btnText }) => {
    return (
        <form onSubmit={Submit} className={styles.formContainer}>
            <label htmlFor={id}>
                <input
                    type={type}
                    id={id}
                    name={name}
                    placeholder={placeholder} />
            </label>

            <Button
                btnText={btnText} />
        </form>
    )
}