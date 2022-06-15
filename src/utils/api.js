import axios from "axios";

const api = axios.create({
    baseURL: 'http://api.garysum.com/api',
})

export const fetchArticles = () => {

      return api.get(`/articles`)

}
