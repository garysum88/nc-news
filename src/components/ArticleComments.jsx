import { useState, useEffect, useContext} from "react";
import { fetchCommentsByID} from "../utils/api";
import { LoadingMsg } from "../utils/messages";
import { UserLoginContext } from "../contexts/User";

import CommentRemoval from "./CommentRemoval";


function ArticleComments ({article_id, submitComments, setLatestCommentCrt}) {

  const { userLogin } = useContext(UserLoginContext)

  const [loadedComments, setLoadedComments] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const [deleteCommentCrt, setDeleteCommentCrt] = useState(0)

  useEffect(()=>{

    fetchCommentsByID(article_id)
    .then(({data:{comments}})=>{

        setLoadedComments(comments)
        setIsLoading(false)
    })
    
  },[article_id, submitComments,deleteCommentCrt])

  if (isLoading) {
    return LoadingMsg()
  }

  console.log(loadedComments)

    return (
      <>

      <h4>💬 Comments 💬 </h4>
      <div className="Comments__container">

        { loadedComments.map((comment)=> {
          return (
            <div key={comment.comment_id} className="Comments__item">

            <p>"{comment.body}"</p>
            <p className="smallerFont"> 👤 {comment.author}</p> 

            { comment.author === userLogin ? <CommentRemoval comment_id={comment.comment_id} setLoadedComments={setLoadedComments} setLatestCommentCrt={setLatestCommentCrt} setDeleteCommentCrt={setDeleteCommentCrt}/> : null }
            </div>
          )
        })}


      </div>

      </>
    )
}

export default ArticleComments
