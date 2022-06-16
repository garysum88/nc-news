import { useNavigate } from "react-router-dom"

function ErrorPageForInvalidTopic () {

  const navigate = useNavigate()
    return (
      <>


      <h3>Invalid Request</h3>
      <p>Please select the topic/sorting/order from the App by clicking the button below:</p>

      <button type="Submit" onClick={() => navigate("/articles")}>View all articles</button>
      </>
    )
}

export default ErrorPageForInvalidTopic;
