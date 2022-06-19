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


  const [ latestCommentCrt, setLatestCommentCrt ] = useState(0)

  const dayjs = require('dayjs')
  const convertedDateAndTime = dayjs(article.created_at).format("DD/MM/YYYY HH:MM"); 


  const navigate = useNavigate()


  let { article_id } = useParams()

  useEffect(()=>{
    fetchArticleByID(article_id)
    .then(({data})=>{
      setArticle(data.article)
      setLatestCommentCrt(data.article.comment_count)
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
      <div className="Article__container">


            <div className="Article__item">
            <div className={"TopicLabel--" + article.topic}>{article.topic}</div>
            <h4 className="largerFont">{article.title}</h4>
            <p className="normalFont">{article.body}</p>
            <p className="smallerFont"><strong>Author:</strong> {article.author}</p>
            <p className="smallerFont"><strong>Date</strong>: {convertedDateAndTime}</p>
            <Vote article_id={article_id} votes={article.votes} latestCommentCrt={latestCommentCrt}/>
            <p>
            </p>
            <p className="normalFont"><button type="Submit" onClick={() => navigate(-1)}>Back</button> </p>
            </div>
      </div>

      <PostAComment article_id={article_id} submitComments={submitComments} setSubmitComments={setSubmitComments} setLatestCommentCrt={setLatestCommentCrt}/>
      <ArticleComments article_id={article_id} submitComments={submitComments} setLatestCommentCrt={setLatestCommentCrt}/>


      </>
    )
}

export default ViewArticle;
