import { fetchTopics } from "../utils/api";
import { LoadingMsg } from "../utils/messages";

import ListArticles from "./ListArticles";
import TopicMenu from "./TopicMenu";

import { useState, useEffect } from "react"



function Articles () {

  const [ isLoading, setIsLoading ] = useState(true)
  const [ topics, setTopics ] = useState({})
  const [ orderState, setOrderState ] = useState("asc")

  useEffect(()=> {

    fetchTopics()
    .then(({data}) => { 
      setTopics(data.topics)
      setIsLoading(false)
    })

 },[])

 if (isLoading) {
  return LoadingMsg()
}

    return (
      <>


      <h3>Articles</h3>

      <TopicMenu topics={topics} />

      <ListArticles />


      </>
    )
}

export default Articles;
