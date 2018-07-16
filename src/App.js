import React, { Component } from 'react';
import {Header} from './components/NavBar/Header'
import logo from './logo.svg';
import './App.css';
import './Styles.css'


class App extends Component {
  render() {
    return (

      <div id="container">
          <Header />
        <div id="jumbotron">
          <h1>The Curse of the Current Reviews</h1>
          <p>
            When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews.
          </p>
        </div>
        <div className="post">
          <h3 className="heading">Hello WatchKit</h3>
          <p>
          Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release.
          The WatchKit framework enable the developers to create Apple Watch applications.
          In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.
          </p>
          <div className="comment">
            <p className="social">12 comments</p>
            <p className="social">124 likes</p>
          </div>
        </div>
        <div className="post">
          <h3 className="heading">Introduction to Swift</h3>
          <p>
            Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started.
          </p>
          <div className="comment">
            <p className="social">15 comments</p>
            <p className="social">43 likes</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
