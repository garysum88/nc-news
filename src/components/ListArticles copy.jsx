import { useState, useEffect } from "react";
import { useParams, useSearchParams, Link} from "react-router-dom"

import { fetchArticles, fetchArticlesByTopic } from "../utils/api";
import { LoadingMsg } from "../utils/messages"

function ListArticles ({orderState,setOrderState}) {

  const [articles, setArticles] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const [searchParams, setSearchParams] = useSearchParams();
  
  const sort_by = searchParams.get('sort_by')

  let SortByStr = ""
  if (sort_by) {
    SortByStr = `?sort_by=${sort_by}&order=${orderState}`
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
      fetchArticles(SortByStr)
      .then(({data})=>{
        setArticles(data.articles)
        setIsLoading(false)
      })
    }

    else {
      fetchArticlesByTopic(topic,SortByStr)
      .then(({data})=>{
        setArticles(data.articles)
        setIsLoading(false)
      })
    }
 
  },[topic,sort_by,orderState])


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
            <p>Created at : {article.created_at}</p>
            <p><em>{article.comment_count} comment{article.comment_count !==0 ? "s" : null} </em> |  {article.votes} vote{ article.vote===0 ? null : "s"}</p>
            </div>
          )
        })}
      </div>
      </>
    )
}

export default ListArticles;
