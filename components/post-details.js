import Link from 'next/link'
import { toTitleCase } from '@/utils/index'
import styles from '@/styles/styles.module.css'

const PostDetails = ({ title = "", body = "" }) => {
    return (
        <div className={styles.page_container}>
            <Link className={styles.back_button} href="/">{"<< Back to posts"}</Link>
            <h1 className={styles.page_header}>{toTitleCase(title)}</h1>
            <p className={styles.post_details_body}>{body}</p>
        </div>
    )
}

export default PostDetails
