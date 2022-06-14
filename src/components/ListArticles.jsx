import { useState, useEffect } from "react";

import { fetchArticles } from "../utils/api";
import { loadingMsg } from "../utils/messages"

function ListArticles () {

  const [articles, setArticles] = useState({})
  const [isLoading, setIsLoading] = useState(true)


  





  useEffect(()=>{

      fetchArticles()
      .then(({data})=>{
        setArticles(data.articles)
        setIsLoading(false)
      })
    },[])

  if (isLoading) {
    return loadingMsg()
  }


    return (
      <>


      <div className="ListArticles__container">

        { articles.map((article)=> {
          return (
            <div key={article.article_id} className="ListArticles__item">
            <h4>{article.title}</h4>
            <p>Topic : {article.topic}</p>
            <p>Author : {article.author}</p>
            <p>Created at : {article.created_at}</p>
            <p><em>{article.comment_count} comment{article.comment_count !==0 ? "s" : null} </em> |  {article.votes} vote{ article.vote===0 ? null : "s"}</p>
            </div>
          )
        })}
      </div>
      </>
    )
}

export default ListArticles;
