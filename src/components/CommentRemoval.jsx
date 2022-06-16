import { useState } from "react"
import { deleteComment } from "../utils/api"
import { DeleteCommentErrMsg } from "../utils/messages"

function CommentRemoval ({setLoadedComments, comment_id, setLatestCommentCrt, setDeleteCommentCrt}) {

    const [isError, setIsError] = useState(false)

    const handleClick = () => {
    
    deleteComment(comment_id)
    .then(()=>{


        setLoadedComments((currArr)=>{
            let newArr = currArr.filter((comment)=> comment.comment_id !== comment_id)
            return newArr
        })

        setLatestCommentCrt((currCrt)=> {
            let newCrt = currCrt - 1
            return newCrt
        })

        setDeleteCommentCrt((currCrt)=>currCrt+1)
        
        setIsError(false)

    })
    .catch((err)=>{
        setIsError(true)
    })

   }



    return (
        <>
        { isError? DeleteCommentErrMsg() : null }
    
        <button className="RemoveButton" onClick={()=>handleClick()}>❌ Delete</button>
        </>
        
    )
}

export default CommentRemoval