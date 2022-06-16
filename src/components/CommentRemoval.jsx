import { useState } from "react"
import { deleteComment } from "../utils/api"
import { DeleteCommentErrMsg } from "../utils/messages"

function CommentRemoval ({setLoadedComments, comment_id, setDeletedComments}) {

    const [isError, setIsError] = useState(false)

    const handleClick = () => {
    
    deleteComment(comment_id)
    .then(()=>{
        setLoadedComments((currArr)=>{
            let newArr = currArr.filter((comment)=> comment.comment_id !== comment_id)
            return newArr
        })

        setDeletedComments((currID)=>{
            let newArr = [...currID]
            newArr.push(comment_id)
            return newArr
        })
        setIsError(false)

    })
    .catch((err)=>{
        setIsError(true)
    })

   }

    return (
        <>
        { isError? DeleteCommentErrMsg() : null }
    
        <button onClick={()=>handleClick()}>Delete my comment</button>
        </>
        
    )
}

export default CommentRemoval