import { fetchTopics } from "../utils/api";
import { LoadingMsg } from "../utils/messages";

import ListArticles from "./ListArticles";
import TopicMenu from "./TopicMenu";
import DisplayOptionMenu from "./DisplayOptionMenu";

import { useState, useEffect } from "react"



function Articles () {

  const [ isLoading, setIsLoading ] = useState(true)
  const [ topics, setTopics ] = useState({})

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


      <h3>🗞 Articles 📰</h3>

      <TopicMenu topics={topics} />

      <DisplayOptionMenu />

      <ListArticles />


      </>
    )
}

export default Articles;
