import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DetailedPost from './Components/DetailedPost/DetailedPost';
import Footer from './Components/Footer/Footer';
import Profile from './Components/Profile/Profile';
import ShowError from './Components/ShowError/ShowError';




function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route path="/home">
            <Navbar></Navbar>
            <Home></Home>
            <Footer></Footer> 
          </Route>
          <Route path="/posts">
            <Navbar></Navbar>
            <Home></Home>
          </Route>
          <Route path="/profile">
            <Navbar></Navbar> 
            <Profile></Profile>
          </Route>
          <Route path="/post/:postsId">
            <Navbar></Navbar> 
            <DetailedPost></DetailedPost>
          </Route>
          <Route exact path="/">
            <Navbar></Navbar>
            <Home></Home>
            <Footer></Footer>    
          </Route> 
          <Route path="*"> 
            <ShowError></ShowError>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
