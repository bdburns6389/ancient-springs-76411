import React, { Component } from 'react';
import './App.css';
import './css/style.css';
import team01 from './img/team/01.png';
import team02 from './img/team/02.png';
import team03 from './img/team/03.png';
import about from "./img/about.jpg";


class App extends Component {
  render() {
    return (
      <body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
        {/* <!-- Navigation
            ==========================================--> */}
        <nav id="menu" className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            {/* <!-- Brand and toggle get grouped for better mobile display --> */}
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
              <a className="navbar-brand page-scroll" href="#page-top">Brian Burns</a>
            </div>
            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#about" className="page-scroll">About</a></li>
                <li><a href="#restaurant-menu" className="page-scroll">Development Philosophy</a></li>
                <li><a href="#team" className="page-scroll">What I Do</a></li>
                <li><a href="#call-reservation" className="page-scroll">Contact</a></li>
              </ul>
            </div>
            {/* <!-- /.navbar-collapse --> */}
          </div>
        </nav>
        {/* <!-- Header --> */}
        <header id="header">
          <div className="intro">
            <div className="overlay">
              <div className="container">
                <div className="row">
                  <div className="intro-text">
                    <h1>Brian Burns</h1>
                    <p>Web Designer / Front-end / Back-end / SQL</p>
                    <a href="#about" className="btn btn-custom btn-lg page-scroll">Discover Story</a> </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* <!-- About Section --> */}
        <div id="about">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-6 ">
                <div className="about-img"><img src={about} className="img-responsive img-rounded" alt="" /></div>
              </div>
              <div className="col-xs-12 col-md-6">
                <div className="about-text">
                  <h2>My Story</h2>
                  <hr />
                  <p>I have enjoyed programming websites from a young age, and have experience in building front facing websites, 
                    as well as server-side rendering applications, as well as database manipulation programs.
                  </p>
                  <h3>How I can help you</h3>
                  <p>I build websites with a simple, clean, and elegant look.  I focus on exactly what you want to say 
                    to your customers, and I avoid extra fluff that doesn't provide function use.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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

        {/* <!-- Team Section --> */}
        <div id="team" className="text-center">
          <div className="overlay">
            <div className="container">
              <div className="col-md-10 col-md-offset-1 section-title">
                <h2>What I Do</h2>
                <hr />
                <p>What can I help you with?  I build anything from single page websites to full fledged persistent apps
                  with data logistics.
                </p>
              </div>
              <div id="row">
                <div className="col-md-4 team">
                  <div className="thumbnail">
                    <div className="team-img"><img src={team01} alt="..." /></div>
                    <div className="caption">
                      <h3>React JS</h3>
                      <p>Using React JS, I can build you reactive, highly customizable websites.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 team">
                  <div className="thumbnail">
                    <div className="team-img"><img src={team02} alt="..." /></div>
                    <div className="caption">
                      <h3>Server-Side Rendering</h3>
                      <p>If you need a little more punch to your website, I also am experienced in back-end programming.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 team">
                  <div className="thumbnail">
                    <div className="team-img"><img src={team03} alt="..." /></div>
                    <div className="caption">
                      <h3>SQL</h3>
                      <p>Need a little data manipulation?  With MySQL, I can take your data and help you organize and
                        better understand it.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Call Reservation Section --> */}
        <div id="call-reservation" className="text-center">
          <div className="container">
            <h2>Interested in how I can help you? Email <a href="mailto:bdburns6389@gmail.com">bdburns6389@gmail.com</a></h2>
          </div>
        </div>
        {/* <!-- Contact Section --> */}
        <div id="contact" className="text-center">
          <div className="container">
            <div className="section-title text-center">
              <h2>Contact Form</h2>
              <hr />
              <p>Contact Form Coming Soon!  Feel Free To Email Me Anytime Above.</p>
            </div>
            <div className="col-md-10 col-md-offset-1">
              <form name="sentMessage" id="contactForm" noValidate>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" id="name" className="form-control" placeholder="Name" required="required" />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="email" id="email" className="form-control" placeholder="Email" required="required" />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea name="message" id="message" className="form-control" rows="4" placeholder="Message" required></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div id="footer">
          <div className="container text-center">
            <div className="col-md-4">
              <h3>Address</h3>
              <div className="contact-item">
                <p>25976 183rd Street,</p>
                <p>Leavenworth Kansas 66048</p>
              </div>
            </div>
            <div className="col-md-4">
              <h3>Further Links</h3>
              <div className="contact-item">
                <p><a href='https://www.linkedin.com/in/bdburns6389'>https://www.linkedin.com/in/bdburns6389</a></p>
                <p><a href='https://www.github.com/bdburns6389'>https://www.github.com/bdburns6389</a></p>
              </div>
            </div>
            <div className="col-md-4">
              <h3>Contact Info</h3>
              <div className="contact-item">
                <p>Phone: 913.240.5841</p>
                <p>Email: bdburns6389@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="container-fluid text-center copyrights">
            <div className="col-md-8 col-md-offset-2">
              <p>&copy; Built and Maintained By  <a href="http://www.bdburns6389.com" rel="nofollow">Brian Burns</a></p>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default App;
