import './App.css';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom"

import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Articles from './components/Articles';
import ViewArticle from './components/ViewArticle';
import MyAccount from './components/MyAccount';
import Footer from './components/Footer';
import LoginBar from './components/UserLoginStatusBar';
import ErrorPage from './components/ErrorPage';
import ErrorPageForInvalidTopic from './components/ErrorPageForInvalidTopic';

import { UserLoginContext } from './contexts/User';

function App() {

  const [userLogin, setUserLogin]  = useState("tickle122")
  
  return (
    <UserLoginContext.Provider value={{userLogin, setUserLogin}}>
    <div className="App">
        <Header />
        <Navbar />
        <LoginBar />
        <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/articles" element={<Articles />}></Route>
                <Route path="/articles/topic/all" element={<Articles />}></Route>
                <Route path="/articles/topic/:topic" element={<Articles />}></Route>
                <Route path="/articles/:article_id" element={<ViewArticle />}></Route>
                <Route path="/myaccount" element={<MyAccount />}></Route>
                <Route path="*" element={<ErrorPage />} />
                <Route path="/invalidtopic" element={<ErrorPageForInvalidTopic />} />   
        </Routes>
        <Footer />
    </div>
    </UserLoginContext.Provider>
  )
}

export default App;
