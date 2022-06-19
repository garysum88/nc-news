# NC News 


## TLDR (Too Long, Didn't Read)

NC News is a social news aggregation, web content rating, and discussion website.

It interacts with an [API](https://garysum-news.herokuapp.com/api) which was developed during my backend project in Northcoders Bootcamp course.

### Links :
  NC News (Deployed version) : http://app.garysum.com   
  NC News Repo on Github : https://github.com/garysum88/nc-news.git  
  Backend API (Deployed version) : https://garysum-news.herokuapp.com/api  
  Backend API Repo on Github : https://github.com/garysum88/be-nc-news.git  


 
## Background

NC News is a social news aggregation, web content rating, and discussion website.

NC News has articles which are divided into topics. Each article has user curated ratings and can be up or down voted using the API. Users can also add comments about an article.

In this app, an user can:
- view a list of all available articles
- view a seperate page for each topic with a list of related articles
- view a list of articles with different display options (sort by date/title/topic/author/votes , ascending or descending order)
- view an individual article
- vote on an article
- post a comment to an article (once logged in) 
- delete a comment that is posted by the user (once logged in) 
- review the basic information of an user (username, name and avatar image)  

This app was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run this app locally?
In order to run this app locally, you have Node.js version 17 installed.

1. Clone the [Repo](https://github.com/garysum88/nc-news.git) in your command line interface

```
git clone https://github.com/garysum88/nc-news.git
```

2. Change the current directory to the 'nc-news' folder

```
cd nc-news
```

3. Install the dependencies to the app
```
npm install
```

4. Run the app in the development mode
```
npm start
```

5. Your web browser should now open. If not, open [http://localhost:3000](http://localhost:3000) to view it in your browser.

6. To stop the app from running in local environment, press Ctrl + C in your command line terminal.


## Dependencies

```
"axios": "^0.27.2",
"dayjs": "^1.11.3",
"react": "^18.1.0",
"react-dom": "^18.1.0","react-router-dom": "^6.3.0",
"react-scripts": "5.0.1",
```
## Contact :
  If you have any question about this app, feel free to contact me at garysum@gmail.com
