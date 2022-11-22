import styles from './socialmedia.module.css';

export const SocialMedia = ({ text, socialLinks }) => {
  return (
    <div className={styles.container}>
      <span>{text}</span>
      <div className={styles.listContent}>
        {
          socialLinks.map((icon, index) => (
            <i key={index}>{icon}</i>
          ))
        }
      </div>
    </div>
  )
}