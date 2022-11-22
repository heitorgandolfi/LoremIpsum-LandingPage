import styles from './info.module.css';

export const Info = ({ icon, title, content }) => {
    return (
        <div className={styles.container}>
                <i>{icon}</i>
            <div>
                <h3>{title}</h3>
                <h4>{content}</h4>
            </div>
        </div>
    )
}