import styles from './cards.module.css';
import { BsCheckCircle } from 'react-icons/bs';
import { Button } from '../../Button';

export const Cards = ({ plan, planPrice, infos }) => {
  return (
    <div className={styles.container}>
      <h4>{plan}</h4>
      <h5>{planPrice}</h5>
      <div className={styles.content}>
        {
          infos.map((info, index) => (
            <p key={index}><i><BsCheckCircle /></i>{info}</p>
          ))
        }
      </div>
      <Button
        btnText="Sign up now"
      />
    </div>
  )
}