import styles from './minorinfo.module.css';

export const MinorInfo = ({ icon, title, content }) => {
    return (
        <div className={styles.minorInfoContainer}>
            <i>{icon}</i>
            <div>
                <h3>{title}</h3>
                <h4>{content}</h4>
            </div>
        </div>
    )
}