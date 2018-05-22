import React, { Component } from 'react';
import './App.css';
import './css/style.css';
// import team01 from './img/team/01.png';
// import team02 from './img/team/02.png';
// import team03 from './img/team/03.png';
// import about from "./img/about.jpg";
import About from './components/About';
//import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Header from './components/Header';
import TechStack from './components/TechStack';
import EmailMe from './components/EmailMe';
import CompanyBio from './components/CompanyBio';
import Portfolio from './components/Portfolio';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar name= 'Brian Burns' 
                navbarItems= {['About','Development Philosophy','What I Do','Contact']} />

        <Header />

        <About  title1='My Story'
                title2='How I Can Help You'/>

        <CompanyBio />

        <TechStack />

        <EmailMe />

        {/* <Contact /> Turn this into the portfolio page */}

        <Portfolio />

        <Footer linkedIn='https://www.linkedin.com/in/bdburns6389'
                github = 'https://www.github.com/bdburns6389'
                phone= '913.240.5841'
                address= {['25976 183rd Street','Leavenworth, KS 66048']}
                email= 'bdburns6389@gmail.com'/>
      </div>
    );
  }
}

export default App;
