import { useState, useEffect } from "react";
import { useParams, useSearchParams, useNavigate} from "react-router-dom"

import { fetchArticles, fetchArticlesByTopic } from "../utils/api";
import { LoadingMsg } from "../utils/messages"

function ListArticles () {

  const [articles, setArticles] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const [searchParams] = useSearchParams();
  
  const sort_by = searchParams.get('sort_by')
  const order = searchParams.get('order')

  const navigate = useNavigate()
  const dayjs = require('dayjs')

  let fetchStr = ""
  if (sort_by===null && order===null) {
    fetchStr = `?sort_by=created_at&order=asc`
  }

  if (sort_by && order===null) {
    fetchStr = `?sort_by=${sort_by}&order=asc`
  }

  if (order && sort_by===null) {
    fetchStr = `?sort_by=created_at&order=${order}`
  }

  if (order && sort_by) {
    fetchStr = `?sort_by=${sort_by}&order=${order}`
  }

  console.log(fetchStr)

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
    navigate("/invalidtopic")
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
            <div onClick={()=>navigate(`/articles/${article.article_id}`)} key={article.article_id} className="listArticles__item" >
            <div className={"TopicLabel--" + article.topic}>{article.topic}</div>
            <h4 className="ListArticleTitle">{article.title}</h4>
            <p className="smallerFont"><strong>Author :</strong>  {article.author}</p>
            <p className="smallerFont"><strong>Date :</strong>  {dayjs(article.created_at).format("DD/MM/YYYY")}</p>
            <p className="smallerFont"><em>💬  {article.comment_count} comment{article.comment_count !==0 ? "s" : null} </em> | 👍🏻 {article.votes} vote{ article.vote===0 ? null : "s"}</p>
            </div>
          )
        })}
      </div>
      </>
    )
}

export default ListArticles;
