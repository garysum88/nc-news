import { useState, useContext } from "react"
import { UserLoginContext } from "../contexts/User";
import { postComment } from "../utils/api";
import { NoLoginMsgForCommment, PostCommentFailMsg, PostCommentSuccessMsg } from "../utils/messages"

function PostAComment ({article_id, setSubmitComments, setLatestCommentCrt}) {

const { userLogin } = useContext(UserLoginContext)

const [ submitStatus, setSubmitStatus ] = useState("pending")
const [ myComment, setMyComment ] = useState("")

const handleSubmit = (event) => {

event.preventDefault()

let commentObj = { 
  "username" : userLogin,
  "body" : myComment
}

postComment(article_id,commentObj)
.then(()=>{
  setSubmitComments((curr)=> curr +1 )
  setSubmitStatus("submitted")
  setMyComment("")
  setLatestCommentCrt((currCrt)=> currCrt+1)
})
.catch((err)=>{
  setSubmitComments((curr)=> curr -1 )
  setSubmitStatus("error")
})

}

if (userLogin==="") {
  return NoLoginMsgForCommment()
}

    return (
      <>


      <div className="PostAComment_container">
      <div className="PostAComment__form">

      <form onSubmit={handleSubmit}>
      { submitStatus === "submitted" ? PostCommentSuccessMsg() : (submitStatus ==="error" ? PostCommentFailMsg : null)}
      <textarea required value={myComment} name="comment" id="comment" placeholder="Leave a comment..." 
      onChange={(event)=> { 
        setMyComment(event.target.value)
      }}>
      </textarea>
      <br></br>
     
      
      <button type="submit">Submit</button>

      </form>

      </div>
      </div>


      </>
    )
}

export default PostAComment;
