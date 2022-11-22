import styles from './maintext.module.css';

export const MainText = ({ mainText, secondaryText }) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.mainTxt}>{mainText}</h2>
            <h3 className={styles.subTxt}>{secondaryText}</h3>
        </div>
    )
}