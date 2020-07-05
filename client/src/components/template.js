import React, { Component } from "react";
import Book from "./Book";
import img1 from "../img/best-Seller/img1.jpg";
import img2 from "../img/best-Seller/img2.jpg";
import img3 from "../img/best-Seller/img3.jpg";

class Template extends Component {
  tokenErase = () => {
    window.localStorage.clear();
  };

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
                  <li className="nav-item">
                    <a
                      className="nav-link js-scroll-trigger"
                      href="#Discussions"
                    >
                      Discussions
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link js-scroll-trigger"
                      href="#Favourites"
                    >
                      Favourites
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#Team">
                      Team
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link js-scroll-trigger"
                      href="/"
                      onClick={this.tokenErase.bind(this)}
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="App">
          <header className="masthead">
            <div className="container">
              <div className="masthead-heading text-uppercase">
                Welcome to WorldBook
              </div>
              <Book />
            </div>
          </header>
          <section className="page-section" id="services">
            <div className="container">
              <div className="text-center">
                <h2 className="section-heading text-uppercase" style={{color:"white"}}>
                  Best Seller 2020
                </h2>
                <h3  style={{color:"white"}}>
                  These are the best seller books of the year!
                </h3>
              </div>
              <div className="row text-center">
                <div className="col-md-4">
                  <img className="img-fluid" src={img1} alt="" />
                  <h4 className="my-3" style={{color:"white"}}>Where the crawdads sing</h4>
                  <p style={{color:"white"}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minima maxime quam architecto quo inventore harum ex magni,
                    dicta impedit.
                  </p>
                </div>
                <div className="col-md-4">
                  <img className="img-fluid" src={img2} alt="" />
                  <h4 className="my-3"style={{color:"white"}}>Little Fires Everywhere</h4>
                  <p style={{color:"white"}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minima maxime quam architecto quo inventore harum ex magni,
                    dicta impedit.
                  </p>
                </div>
                <div className="col-md-4">
                  <img className="img-fluid" src={img3} alt="" />
                  <h4 className="my-3"style={{color:"white"}}>American Dirt </h4>
                  <p style={{color:"white"}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minima maxime quam architecto quo inventore harum ex magni,
                    dicta impedit.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Template;
