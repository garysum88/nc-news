import { useState, useEffect } from "react";
import { useParams, useSearchParams, Link} from "react-router-dom"

import { fetchArticles, fetchArticlesByTopic } from "../utils/api";
import { LoadingMsg, SelectTopicAndSortByError} from "../utils/messages"

function ListArticles () {

  const [articles, setArticles] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const [searchParams] = useSearchParams();
  
  const sort_by = searchParams.get('sort_by')
  const order = searchParams.get('order')

  const dayjs = require('dayjs')

  let fetchStr = ""
  if (sort_by) {
    fetchStr = `?sort_by=${sort_by? sort_by : ""}&order=${order? order : "asc"}`
  }


  let { topic } = useParams()
  let topicSelected = ""

  if (typeof topic ==="undefined") {
    topicSelected = "all"
  }
  else {
    topicSelected = topic
  }

  useEffect(()=>{

    if (topicSelected==="all") {
      fetchArticles(fetchStr)
      .then(({data})=>{
        setArticles(data.articles)
        setIsLoading(false)
      })
    }

    else {
      fetchArticlesByTopic(topic,fetchStr)
      .then(({data})=>{
        setIsError(false)
        setArticles(data.articles)
        setIsLoading(false)
      })
      .catch((err)=>{
        setIsError(true)
      })
    }
 
  },[topic,topicSelected,sort_by,order,fetchStr])

  if (isError) {
    return SelectTopicAndSortByError()
  }

  if (isLoading) {
    return LoadingMsg()
  }


    return (
      <>
  <p><em>There are {articles.length} articles{ topicSelected==="all" ? null : ` about "${topicSelected}"`}:</em></p>


      <div className="ListArticles__container">

        { articles.map((article)=> {
          return (
            <div key={article.article_id} className="ListArticles__item">
            <h4><Link to={`/articles/${article.article_id}`}>{article.title}</Link></h4>
            <p>Topic : {article.topic}</p>
            <p>Author : {article.author}</p>
            <p>Created at : {dayjs(article.created_at).format("DD/MM/YYYY HH:MM")}</p>
            <p><em>{article.comment_count} comment{article.comment_count !==0 ? "s" : null} </em> |  {article.votes} vote{ article.vote===0 ? null : "s"}</p>
            </div>
          )
        })}
      </div>
      </>
    )
}

export default ListArticles;
