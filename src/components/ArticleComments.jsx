import { useState, useEffect } from "react";
import { fetchCommentsByID} from "../utils/api";
import { LoadingMsg } from "../utils/messages";




function ArticleComments ({article_id, submitStatus, submitComments}) {



  const [loadedComments, setLoadedComments] = useState({})
  const [isLoading, setIsLoading] = useState(true)


  useEffect(()=>{

    fetchCommentsByID(article_id)
    .then(({data:{comments}})=>{
      setLoadedComments(comments)
      setIsLoading(false)
    })
 
  },[article_id, submitComments,loadedComments])


  if (isLoading) {
    return LoadingMsg()
  }


    return (
      <>

      <h4>Comments: </h4>
      <div className="Comments__container">

        { loadedComments.map((comment)=> {
          return (
            <div key={comment.comment_id} className="Comments__item">
            <blockquote>
            <p>"{comment.body}"</p>
            <p> — {comment.author}</p> 
            </blockquote>

            </div>
          )
        })}
      </div>
      </>
    )
}

export default ArticleComments
