import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { fetchArticleByID } from "../utils/api";
import { LoadingMsg, ArticleNotExistsMsg} from "../utils/messages"


import Vote from "./Vote";

import ArticleComments from "./ArticleComments";

function ViewArticle () {

  const [ article, setArticle ] = useState({})
  const [ isLoading, setIsLoading ] = useState(true)
  const [ isError , setIsError] = useState(false)

  const [ submitComments, setSubmitComments ] = useState(0)

  const navigate = useNavigate()

  let { article_id } = useParams()

  useEffect(()=>{
    fetchArticleByID(article_id)
    .then(({data})=>{
      setArticle(data.article)
      setIsLoading(false)
    })
    .catch((err)=> {
     setIsError(true)
    })
  },[article_id])


  if (isError) {
      return ArticleNotExistsMsg()
  }

  if (isLoading) {
    return LoadingMsg()
  }




    return (
      <>
      <h3>View Article</h3>

      <div className="Article__container">


            <div className="Article__item">
            <h4>{article.title}</h4>
            <p>{article.body}</p>
            <p>Author : {article.author}</p>
            <p>Topic : {article.topic}</p>
            <p>Created at: {article.created_at}</p>
            <p><em>{article.comment_count} comment{article.comment_count !==0 ? "s" : null} </em></p>
            <Vote article_id={article_id} votes={article.votes}/>
            <p></p>
            <p><button type="Submit" onClick={() => navigate(-1)}>Back</button> </p>
            </div>
      </div>
      

      <ArticleComments article_id={article_id}/>


      </>
    )
}

export default ViewArticle;
