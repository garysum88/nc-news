import { fetchTopics } from "../utils/api";
import { loadingMsg } from "../utils/messages";

import ListArticles from "./ListArticles";


import { useState, useEffect } from "react"



function Articles () {

  const [ isLoading, setIsLoading ] = useState(true)
  const [ topics, setTopics ] = useState({})
  const [ orderState, setOrderState ] = useState("asc")


    return (
      <>


      <h3>Articles</h3>



      <ListArticles />


      </>
    )
}

export default Articles;
