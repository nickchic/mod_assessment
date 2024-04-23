
import styles from '@/styles/global.module.css'

const ErrorMessage = ({ message }) => {
    return (
        <div className={styles.page_container}>
          <p className={styles.error_message}>{message}</p>
        </div>
      )
}

export default ErrorMessage
