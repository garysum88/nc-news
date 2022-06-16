import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { fetchArticleByID } from "../utils/api";
import { LoadingMsg, ArticleNotExistsMsg} from "../utils/messages"


import Vote from "./Vote";
import ArticleComments from "./ArticleComments";
import PostAComment from "./PostAComment"

function ViewArticle () {

  const [ article, setArticle ] = useState({})
  const [ isLoading, setIsLoading ] = useState(true)
  const [ isError , setIsError] = useState(false)

  const [ submitComments, setSubmitComments ] = useState(0)
  const [ deletedComments, setDeletedComments ] = useState([])

  const dayjs = require('dayjs')
  const convertedDateAndTime = dayjs(article.created_at).format("DD/MM/YYYY HH:MM"); 


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
  },[article_id,submitComments,deletedComments])


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
            <p>Created at: {convertedDateAndTime}</p>
            <p><em>{article.comment_count} comment{article.comment_count !==0 ? "s" : null} </em></p>
            <Vote article_id={article_id} votes={article.votes}/>
            <p></p>
            <p><button type="Submit" onClick={() => navigate(-1)}>Back</button> </p>
            </div>
      </div>
      
      <PostAComment submitComments={submitComments} setSubmitComments={setSubmitComments} article_id={article_id}/>
      <ArticleComments article_id={article_id} submitComments={submitComments} setDeletedComments={setDeletedComments}/>


      </>
    )
}

export default ViewArticle;