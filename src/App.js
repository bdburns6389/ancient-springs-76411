import React, { Component } from 'react';
import './App.css';
import './css/style.css';
import team01 from './img/team/01.png';
import team02 from './img/team/02.png';
import team03 from './img/team/03.png';
// import about from "./img/about.jpg";
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Header from './components/Header';
import TechStack from './components/TechStack';
import EmailMe from './components/EmailMe';

class App extends Component {
  render() {
    return (
      <body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
        <Navbar />
        <Header />
        <About />
        {/* <!-- Restaurant Menu Section --> */}
        <div id="restaurant-menu">
          <div className="section-title text-center center">
            <div className="overlay">
              <h2>Development Philosophy</h2>
              <hr />
              <p></p>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <div className="menu-section">
                  <h2 className="menu-section-title">Simple, Clean Design</h2>
                  <hr />
                  <div className="menu-item">
                    <div className="menu-item-description">You know what you want to tell your customers, let me help
                      get your message across with out the need for superfluous design that only gets in the way of 
                      communicating your message.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6">
                <div className="menu-section">
                  <h2 className="menu-section-title">Well Structured Data</h2>
                  <hr />
                  <div className="menu-item">
                    <div className="menu-item-description">You've got data.  Let me help you organize it in a way that it will better help
                      you understand and reach your customer base. </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TechStack />
        <EmailMe />
        <Contact />
        <Footer />
      </body>
    );
  }
}

export default App;
