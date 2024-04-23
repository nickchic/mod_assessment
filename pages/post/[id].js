import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import ErrorMessage from "@/components/error-message"
import PostDetails from "@/components/post-details"

const PostDetailsPage = () => {
    const router = useRouter()
    const { id } = router.query

    const [data, setData] = useState([])
    const [isError, setIsError] = useState(false)

    const { title = "", body = "" } = data

    useEffect(() => {
        //id is undefined on first render, wait until it is defined before making API request
        if(!id) return

        //fecth post details and set it in the state
        fetch("https://jsonplaceholder.typicode.com/posts/" + id)
            .then((res) => {
                if(res?.status != 200) {
                    throw Error("API Error")
                }

                return res.json()
            })
            .then((json) => {
                setData(json)
            })
            .catch(() => {
                setIsError(true)
            })

    }, [id])

    if(isError) {
        return <ErrorMessage message="Oops! Something went wrong"/>
    }

    return <PostDetails title={title} body={body} />
}

export default PostDetailsPage
