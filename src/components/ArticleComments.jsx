import { useState, useEffect, useContext} from "react";
import { fetchCommentsByID} from "../utils/api";
import { LoadingMsg } from "../utils/messages";
import { UserLoginContext } from "../contexts/User";

import CommentRemoval from "./CommentRemoval";


function ArticleComments ({article_id, submitComments, setLatestCommentCrt}) {

  const { userLogin } = useContext(UserLoginContext)

  const [loadedComments, setLoadedComments] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const [hiddenComments, setHiddenComments] = useState([])
  const [showAllStatus, setShowAllStatus] = useState(false)
  const [deleteCommentCrt, setDeleteCommentCrt] = useState(0)

  useEffect(()=>{

    fetchCommentsByID(article_id)
    .then(({data:{comments}})=>{

      if (comments.length > 5) {
        setHiddenComments((curr)=>{
        let copiedArr = [...comments].splice(0,comments.length-5)
        return copiedArr
        })
        setLoadedComments((curr)=>{
        let copiedArr = [...comments].splice(comments.length - comments.length -5, 5)
        return copiedArr
        })
        setIsLoading(false)
      }

      else {
        setLoadedComments(comments)
        setIsLoading(false)
      }
    })
    
  },[article_id, submitComments,deleteCommentCrt])


const showAll = (event) => {
  setShowAllStatus(true)

  setLoadedComments((currArr)=> {
    let merged = hiddenComments.concat(currArr)
    return merged
  })
}

  if (isLoading) {
    return LoadingMsg()
  }


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

      {showAllStatus === false && hiddenComments.length >0 ? <button onClick={()=>showAll()}>Show all comments</button> : ""}
      </>
    )
}

export default ArticleComments
