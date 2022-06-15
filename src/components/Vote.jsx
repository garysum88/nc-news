import { useState } from "react";
import { patchVote } from "../utils/api";
import { VoteErrorMsg } from "../utils/messages";



function Vote ({article_id,votes}) {

  const [voteNum, setVoteNum] = useState(0)
  const [isError, setIsError] = useState(false)



  const handleVote = (value) => {
    let reqBody = { "inc_votes": value }

    setVoteNum((currVotes)=> currVotes + value )
    setIsError(false)

    patchVote(article_id,reqBody)
    .catch((err)=>{
      setVoteNum((currVotes)=> currVotes - value )
      setIsError(true)
    })
  }

    return (
      <>


     <p>Net votes : {votes + voteNum} </p>

     <p><button type="Submit" onClick={()=> handleVote(1)}>👍🏻</button> <button type="Submit" onClick={()=> handleVote(-1)}>👎🏻</button> </p>
     { isError ? VoteErrorMsg() : ""}

      </>
    )
}

export default Vote;
