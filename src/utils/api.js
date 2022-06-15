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
