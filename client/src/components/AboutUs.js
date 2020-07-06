import React, { Component } from 'react'
import "./CSS/about.css";

export default class AboutUs extends Component {
    render() {
        return (
            <div>
            <div>
              <nav
                className="navbar navbar-expand-lg navbar-dark fixed-top"
                id="mainNav"
              >
                <div className="container">
                  <a className="navbar-brand js-scroll-trigger" href="#page-top">
                    <img src="assets/img/navbar-logo.svg" alt="" />
                  </a>
                  <button
                    className="navbar-toggler navbar-toggler-right"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    Menu
                    <i className="fas fa-bars ml-1"></i>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ml-auto">
                      <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="/Home">
                          Home
                        </a>
                      </li>
                      {/* <li className="nav-item">
                        <a
                          className="nav-link js-scroll-trigger"
                          href="#Discussions"
                        >
                          Discussions
                        </a>
                      </li> */}
                      {/* <li className="nav-item">
                        <a
                          className="nav-link js-scroll-trigger"
                          href="#Favourites"
                        >
                          Favourites
                        </a>
                      </li> */}
                      <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="/About">
                          About us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
            <div>
               <h2 style={{color:"white"}}>Who we are</h2> 
               <p style={{color:"white", fontWeight:"1000"
               }}>WorldBook is the world’s largest social network for readers and book recommendations. Our mission is to help people find and share books they love. Goodreads launched in January 2020.</p>
               <br/>
               <br/>
               <h2 style={{color:"rgb(0, 255, 255)"}}>Why we love books</h2> 
               <p style={{color:"white",fontWeight:"700"}}>WorldBook is the world’s largest social network for readers and book recommendations. Our mission is to help people find and share books they love. Goodreads launched in January 2020.</p>
               <h2 style={{color:"rgb(0, 255, 255)"}}>Words from the owner</h2> 
               <p style={{color:"white",fontWeight:"700"}}>When I was a child, I pretty much taught myself to read (using comic books!) and became a passionate reader from the beginning. I would read books under my covers with a flashlight to keep my parents from knowing that I was not sleeping. The price of being found was a beating from my Father. His instrument of causing pain was an antique butter paddle. I think the risk made me more determined and forever made a book my best, treasured companion along with my Brother.</p>
            </div>
            </div>
        )
    }
}
