import './App.css';

import { Routes, Route } from "react-router-dom"

import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Articles from './components/Articles';

import MyAccount from './components/MyAccount';
import Footer from './components/Footer';
import LoginBar from './components/UserLoginStatusBar';



function App() {


  
  return (

    <div className="App">
        <Header />
        <Navbar />
        <LoginBar />
        <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/articles" element={<Articles />}></Route>
                <Route path="/articles/topic/:topic" element={<Articles />}></Route>
                <Route path="/myaccount" element={<MyAccount />}></Route>
        </Routes>
        <Footer />
    </div>

  )
}

export default App;
