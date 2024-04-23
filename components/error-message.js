
import styles from '@/styles/styles.module.css'

const ErrorMessage = ({ message = "" }) => {
    return (
        <div className={styles.page_container}>
            <p className={styles.error_message}>{message}</p>
        </div>
    )
}

export default ErrorMessage
