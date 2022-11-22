import styles from './topics.module.css';

export const Topics = ({ topicName, topics }) => {
    return (
        <div className={styles.containerTopics}>
            <h5>{topicName}</h5>
            {
                topics.map((text, index) => (
                    <a key={index}>{text}</a>
                ))
            }
        </div>
    )
}