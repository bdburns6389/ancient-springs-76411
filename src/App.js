import React, { Component } from 'react';
import './App.css';
import './css/style.css';
import team01 from './img/team/01.jpg';
import team02 from './img/team/02.jpg';
import team03 from './img/team/03.jpg';
import about from "./img/about.jpg";
import portfolio02small from "./img/portfolio/02-small.png";
import portfolio05small from "./img/portfolio/05-small.png";
import portfolio08small from "./img/portfolio/08-small.png";

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
                <li><a href="#restaurant-menu" className="page-scroll">Menu</a></li>
                <li><a href="#portfolio" className="page-scroll">Languages/Frameworks</a></li>
                <li><a href="#team" className="page-scroll">Personal Projects</a></li>
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
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam commodo nibh.</p>
                  <h3>Where I am Now</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Restaurant Menu Section --> */}
        <div id="restaurant-menu">
          <div className="section-title text-center center">
            <div className="overlay">
              <h2>Menu</h2>
              <hr />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed.</p>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <div className="menu-section">
                  <h2 className="menu-section-title">Breakfast & Starters</h2>
                  <hr />
                  <div className="menu-item">
                    <div className="menu-item-name"> Delicious Dish </div>
                    <div className="menu-item-price"> $35 </div>
                    <div className="menu-item-description"> g elit, duis sed dapibus leo nec ornare diam. </div>
                  </div>
                  <div className="menu-item">
                    <div className="menu-item-name"> Delicious Dish </div>
                    <div className="menu-item-price"> $30 </div>
                    <div className="menu-item-description"> Lorem ipsum dolor sit amet,dapibus leo nec ornare diam. </div>
                  </div>
                  <div className="menu-item">
                    <div className="menu-item-name"> Delicious Dish </div>
                    <div className="menu-item-price"> $30 </div>
                    <div className="menu-item-description"> Lorem ipsum dolor sit amet, consectetur, dapibus leo nec ornare diam. </div>
                  </div>
                  <div className="menu-item">
                    <div className="menu-item-name"> Delicious Dish </div>
                    <div className="menu-item-price"> $30 </div>
                    <div className="menu-item-description"> Lorem ipsum dolor sit amet, duis sed dapibus leo nec ornare diam. </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6">
                <div className="menu-section">
                  <h2 className="menu-section-title">Main Course</h2>
                  <hr />
                  <div className="menu-item">
                    <div className="menu-item-name"> Delicious Dish </div>
                    <div className="menu-item-price"> $45 </div>
                    <div className="menu-item-description"> Lorem ipsum dolor sit amet, duis sed dapibus leo nec ornare diam. </div>
                  </div>
                  <div className="menu-item">
                    <div className="menu-item-name"> Delicious Dish </div>
                    <div className="menu-item-price"> $30 </div>
                    <div className="menu-item-description"> Lorem ipsum dolor sit amet, duis sed dapibus leo nec ornare diam. </div>
                  </div>
                  <div className="menu-item">
                    <div className="menu-item-name"> Delicious Dish </div>
                    <div className="menu-item-price"> $30 </div>
                    <div className="menu-item-description"> Lorem ipsum dolor sit amet, duis sed dapibus leo nec ornare diam. </div>
                  </div>
                  <div className="menu-item">
                    <div className="menu-item-name"> Delicious Dish </div>
                    <div className="menu-item-price"> $30 </div>
                    <div className="menu-item-description"> Lorem ipsum dolor sit amet, duis sed dapibus leo nec ornare diam. </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          {/* <!-- Portfolio Section --> */}
          <div id="portfolio">
            <div className="section-title text-center center">
              <div className="overlay">
                <h2>Languages/Frameworks</h2>
                <hr />
                <p>Listed Below are some of the languages and frameworks I have interest in,
                  as well as some of the technologies
                  I use to make my development process easier
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-items">
              {/* <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div> <a href={portfolio01small} title="">
                    <img src={portfolio01small} className="img-responsive" alt="" /> </a> </div>
                </div>
              </div> */}
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div> <a href={portfolio02small} title="">
                    <img src={portfolio02small} className="img-responsive" alt="" /> </a> </div>
                </div>
              </div>
              {/* <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg"> <a href={portfolio03small} title="">
                    <img src={portfolio03small} className="img-responsive" alt="" /> </a> </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg"> <a href={portfolio04small} title="">
                    <img src={portfolio04small} className="img-responsive" alt="" /> </a> </div>
                </div>
              </div> */}
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg"> <a href={portfolio05small} title="">
                    <img src={portfolio05small} className="img-responsive" alt="" /> </a> </div>
                </div>
              </div>
              {/* <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg"> <a href={portfolio06small} title="">
                    <img src={portfolio06small} className="img-responsive" alt="" /> </a> </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg"> <a href={portfolio07small} title="">
                    <img src={portfolio07small} className="img-responsive" alt="" /> </a> </div>
                </div>
              </div> */}
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg"> <a href={portfolio08small} title="">
                    <img src={portfolio08small} className="img-responsive" alt="" /> </a> </div>
                </div>
              </div>
              {/* <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg"> <a href={portfolio09small} title="">
                    <img src={portfolio09small} className="img-responsive" alt="" /> </a> </div>
                </div>
              </div> */}
              {/* <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg"> <a href={portfolio10small} title="">
                    <img src={portfolio10small} className="img-responsive" alt="" /> </a> </div>
                </div>
              </div> */}
              {/* <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg"> <a href={portfolio11small} title="">
                    <img src={portfolio11small} className="img-responsive" alt="" /> </a> </div>
                </div>
              </div> */}
              {/* <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg"> <a href={portfolio12small} title="">
                    <img src={portfolio12small} className="img-responsive" alt="" /> </a> </div>
                </div>
              </div> */}
            </div>
          </div>
        

        {/* <!-- Team Section --> */}
        <div id="team" className="text-center">
          <div className="overlay">
            <div className="container">
              <div className="col-md-10 col-md-offset-1 section-title">
                <h2>Personal Projects</h2>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
              </div>
              <div id="row">
                <div className="col-md-4 team">
                  <div className="thumbnail">
                    <div className="team-img"><img src={team01} alt="..." /></div>
                    <div className="caption">
                      <h3>Mike Doe</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 team">
                  <div className="thumbnail">
                    <div className="team-img"><img src={team02} alt="..." /></div>
                    <div className="caption">
                      <h3>Chris Doe</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 team">
                  <div className="thumbnail">
                    <div className="team-img"><img src={team03} alt="..." /></div>
                    <div className="caption">
                      <h3>Ethan Doe</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam.</p>
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
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed.</p>
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
              <div className="social">
                <ul>
                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                </ul>
              </div>
              <p>&copy; Built and Maintained By  <a href="http://www.bdburns6389.com" rel="nofollow">Brian Burns</a></p>
            </div>
          </div>
        </div>
        <script type="text/javascript" src="js/jquery.1.11.1.js"></script>
        <script type="text/javascript" src="js/bootstrap.js"></script>
        <script type="text/javascript" src="js/SmoothScroll.js"></script>
        <script type="text/javascript" src="js/nivo-lightbox.js"></script>
        <script type="text/javascript" src="js/jquery.isotope.js"></script>
        <script type="text/javascript" src="js/jqBootstrapValidation.js"></script>
        <script type="text/javascript" src="js/contact_me.js"></script>
        <script type="text/javascript" src="js/main.js"></script>
      </body>
    );
  }
}

export default App;
