import Post from "@/components/post"
import styles from '@/styles/styles.module.css'

const PostTable = ({ data = [] }) => {
    //empty state is there are no posts
    if(data?.length < 1) {
        return (
            <div className={styles.page_container}>
                <h1>Posts</h1>
                <div>There are no posts</div>
            </div>
        )
    }

  return (
    <div className={styles.page_container}>
        <h1 className={styles.page_header}>Posts</h1>
        {data.map(({ title = "", body = "", id = "" }, i) => {
            return <Post title={title} body={body} id={id} key={i} />
        })}
    </div>
  )
}

export default PostTable
