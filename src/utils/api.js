import axios from "axios";

const api = axios.create({
    baseURL: 'http://api.garysum.com/api',
})

export const fetchArticles = () => {

      return api.get(`/articles`)

}

export const fetchArticlesByTopic = (topic) => {

    return api.get(`/articles?topic=${topic}`)
  }
 

export const fetchTopics = () => {

    return api.get('/topics')
 
 }

 export const fetchArticleByID = (article_id) => {

    return api.get(`/articles/${article_id}`)
 
 }

 export const patchVote = (article_id,reqBody) => {

  return api.patch(`/articles/${article_id}`,reqBody)

}

export const fetchCommentsByID = (article_id) => {

  return api.get(`/articles/${article_id}/comments`)

}

export const postComment = (article_id,commentObj) => {

  return api.post(`/articles/${article_id}/comments`,commentObj)

}

export const fetchUsers = () => {

  return api.get(`/users`)

}