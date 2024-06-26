import Link from 'next/link'
import { toTitleCase } from '@/utils/index'
import styles from '@/styles/styles.module.css'

const Post = ({ title = "", body = "", id = "" }) => {
  return (
        <div className={styles.post_container}>
            <Link className={styles.post_table_link} href={"/post/" + id}>{toTitleCase(title)}</Link>
            <p className={styles.post_table_body}>{body}</p>
        </div>
    )
}

export default Post
