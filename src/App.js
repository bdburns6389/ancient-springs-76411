import React, { Component } from 'react';
import './App.css';
import './css/style.css';
// import team01 from './img/team/01.png';
// import team02 from './img/team/02.png';
// import team03 from './img/team/03.png';
// import about from "./img/about.jpg";
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Header from './components/Header';
import TechStack from './components/TechStack';
import EmailMe from './components/EmailMe';
import CompanyBio from './components/CompanyBio';

class App extends Component {
  render() {
    return (
      <body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
        <Navbar />
        <Header />
        <About />
        <CompanyBio />
        <TechStack />
        <EmailMe />
        <Contact />
        <Footer linkedIn='https://www.linkedin.com/in/bdburns6389'
                github = 'https://www.github.com/bdburns6389'/>
      </body>
    );
  }
}

export default App;
