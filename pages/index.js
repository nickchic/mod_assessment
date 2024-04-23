import { useState, useEffect } from 'react'
import ErrorMessage from "@/components/error-message"
import PostTable from "@/components/post-table"

const POSTS_PER_PAGE = 10

const Home = () => {
  const [data, setData] = useState([])
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    //fetch data and place it into state
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if(res?.status != 200) {
          throw Error("API Error")
        }

        return res.json()
      })
      .then((json) => {
        setData(json.slice(0, POSTS_PER_PAGE)) //we only want the first X posts
      })
      .catch(() => {
        setIsError(true)
      })

  }, [])

  //error state, if the API does not return data
  if(isError) {
    return <ErrorMessage message="Oops! Something went wrong"/>
  }

  return <PostTable data={data} />
}

export default Home
