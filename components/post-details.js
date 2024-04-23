import Link from 'next/link'
import { toTitleCase } from '@/utils/index'
import styles from '@/styles/global.module.css'

const PostDetails = ({ title = "", body = "" }) => {
    return (
        <div className={styles.page_container}>
            <Link href="/">{"<< Back to posts"}</Link>
            <h1 className={styles.page_header}>{toTitleCase(title)}</h1>
            <p>{body}</p>
        </div>
    )
}

export default PostDetails
