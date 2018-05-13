import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/style.css';
import team01 from './img/team/01.jpg';
import team02 from './img/team/02.jpg';
import team03 from './img/team/03.jpg';
import about from "./img/about.jpg";
import portfolio01small from "./img/portfolio/01-small.jpg";
import portfolio02small from "./img/portfolio/02-small.jpg";
import portfolio03small from "./img/portfolio/03-small.jpg";
import portfolio04small from "./img/portfolio/04-small.jpg";
import portfolio05small from "./img/portfolio/05-small.jpg";
import portfolio06small from "./img/portfolio/06-small.jpg";
import portfolio07small from "./img/portfolio/07-small.jpg";
import portfolio08small from "./img/portfolio/08-small.jpg";
import portfolio09small from "./img/portfolio/09-small.jpg";
import portfolio10small from "./img/portfolio/10-small.jpg";
import portfolio11small from "./img/portfolio/11-small.jpg";
import portfolio12small from "./img/portfolio/12-small.jpg";

class App extends Component {
  render() {
    return (
      <body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
        {/* <!-- Navigation
            ==========================================--> */}
        <nav id="menu" class="navbar navbar-default navbar-fixed-top">
          <div class="container">
            {/* <!-- Brand and toggle get grouped for better mobile display --> */}
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
              <a class="navbar-brand page-scroll" href="#page-top">Brian Burns</a> 
            </div>
            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav navbar-right">
                <li><a href="#about" class="page-scroll">About</a></li>
                <li><a href="#restaurant-menu" class="page-scroll">Menu</a></li>
                <li><a href="#portfolio" class="page-scroll">Languages/Frameworks</a></li>
                <li><a href="#team" class="page-scroll">Personal Projects</a></li>
                <li><a href="#call-reservation" class="page-scroll">Contact</a></li>
              </ul>
            </div>
            {/* <!-- /.navbar-collapse --> */}
          </div>
        </nav>
        {/* <!-- Header --> */}
        <header id="header">
          <div class="intro">
            <div class="overlay">
              <div class="container">
                <div class="row">
                  <div class="intro-text">
                    <h1>Brian Burns</h1>
                    <p>Web Designer / Front-end / Back-end / SQL</p>
                    <a href="#about" class="btn btn-custom btn-lg page-scroll">Discover Story</a> </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* <!-- About Section --> */}
        <div id="about">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-md-6 ">
                <div class="about-img"><img src={about} class="img-responsive img-rounded" alt="" /></div>
              </div>
              <div class="col-xs-12 col-md-6">
                <div class="about-text">
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
          <div class="section-title text-center center">
            <div class="overlay">
              <h2>Menu</h2>
              <hr />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed.</p>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-sm-6">
                <div class="menu-section">
                  <h2 class="menu-section-title">Breakfast & Starters</h2>
                  <hr />
                  <div class="menu-item">
                    <div class="menu-item-name"> Delicious Dish </div>
                    <div class="menu-item-price"> $35 </div>
                    <div class="menu-item-description"> g elit, duis sed dapibus leo nec ornare diam. </div>
                  </div>
                  <div class="menu-item">
                    <div class="menu-item-name"> Delicious Dish </div>
                    <div class="menu-item-price"> $30 </div>
                    <div class="menu-item-description"> Lorem ipsum dolor sit amet,dapibus leo nec ornare diam. </div>
                  </div>
                  <div class="menu-item">
                    <div class="menu-item-name"> Delicious Dish </div>
                    <div class="menu-item-price"> $30 </div>
                    <div class="menu-item-description"> Lorem ipsum dolor sit amet, consectetur, dapibus leo nec ornare diam. </div>
                  </div>
                  <div class="menu-item">
                    <div class="menu-item-name"> Delicious Dish </div>
                    <div class="menu-item-price"> $30 </div>
                    <div class="menu-item-description"> Lorem ipsum dolor sit amet, duis sed dapibus leo nec ornare diam. </div>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6">
                <div class="menu-section">
                  <h2 class="menu-section-title">Main Course</h2>
                  <hr />
                  <div class="menu-item">
                    <div class="menu-item-name"> Delicious Dish </div>
                    <div class="menu-item-price"> $45 </div>
                    <div class="menu-item-description"> Lorem ipsum dolor sit amet, duis sed dapibus leo nec ornare diam. </div>
                  </div>
                  <div class="menu-item">
                    <div class="menu-item-name"> Delicious Dish </div>
                    <div class="menu-item-price"> $30 </div>
                    <div class="menu-item-description"> Lorem ipsum dolor sit amet, duis sed dapibus leo nec ornare diam. </div>
                  </div>
                  <div class="menu-item">
                    <div class="menu-item-name"> Delicious Dish </div>
                    <div class="menu-item-price"> $30 </div>
                    <div class="menu-item-description"> Lorem ipsum dolor sit amet, duis sed dapibus leo nec ornare diam. </div>
                  </div>
                  <div class="menu-item">
                    <div class="menu-item-name"> Delicious Dish </div>
                    <div class="menu-item-price"> $30 </div>
                    <div class="menu-item-description"> Lorem ipsum dolor sit amet, duis sed dapibus leo nec ornare diam. </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-6">
                <div class="menu-section">
                  <h2 class="menu-section-title">Dinner</h2>
                  <hr />
                  <div class="menu-item">
                    <div class="menu-item-name"> Delicious Dish </div>
                    <div class="menu-item-price"> $45 </div>
                    <div class="menu-item-description"> Lorem ipsum dolor sit amet, duis sed dapibus leo nec ornare diam. </div>
                  </div>
                  <div class="menu-item">
                    <div class="menu-item-name"> Delicious Dish </div>
                    <div class="menu-item-price"> $350 </div>
                    <div class="menu-item-description"> Lorem ipsum dolor sit amet, duis sed dapibus leo nec ornare diam. </div>
                  </div>
                  <div class="menu-item">
                    <div class="menu-item-name"> Delicious Dish </div>
                    <div class="menu-item-price"> $30 </div>
                    <div class="menu-item-description"> Lorem ipsum dolor sit amet, duis sed dapibus leo nec ornare diam.. </div>
                  </div>
                  <div class="menu-item">
                    <div class="menu-item-name"> Delicious Dish </div>
                    <div class="menu-item-price"> $30 </div>
                    <div class="menu-item-description"> Lorem ipsum dolor sit amet, duis sed dapibus leo nec ornare diam. </div>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-6">
                  <div class="menu-section">
                    <h2 class="menu-section-title">Coffee & Drinks</h2>
                    <hr />
                    <div class="menu-item">
                      <div class="menu-item-name"> Delicious Dish </div>
                      <div class="menu-item-price"> $35 </div>
                      <div class="menu-item-description"> Lorem ipsum dolor sit amet, duis sed dapibus leo nec ornare diam. </div>
                    </div>
                    <div class="menu-item">
                      <div class="menu-item-name"> Delicious Dish </div>
                      <div class="menu-item-price"> $30 </div>
                      <div class="menu-item-description"> Lorem ipsum dolor sit amet, duis sed dapibus leo nec ornare diam. </div>
                    </div>
                    <div class="menu-item">
                      <div class="menu-item-name"> Delicious Dish </div>
                      <div class="menu-item-price"> $30 </div>
                      <div class="menu-item-description"> Lorem ipsum dolor sit amet, duis sed dapibus leo nec ornare diam. </div>
                    </div>
                    <div class="menu-item">
                      <div class="menu-item-name"> Delicious Dish </div>
                      <div class="menu-item-price"> $30 </div>
                      <div class="menu-item-description"> Lorem ipsum dolor sit amet, duis sed dapibus leo nec ornare diam. </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Portfolio Section --> */}
          <div id="portfolio">
            <div class="section-title text-center center">
              <div class="overlay">
                <h2>Languages/Frameworks</h2>
                <hr />
                <p>Listed Below are some of the languages and frameworks I have interest in, 
                  as well as some of the technologies 
                  I use to make my development process easier
                </p>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="categories">
                  <ul class="cat">
                    <li>
                      <ol class="type">
                        <li><a href="#" data-filter="*" class="active">All</a></li>
                        <li><a href="#" data-filter=".breakfast">Breakfast</a></li>
                        <li><a href="#" data-filter=".lunch">Lunch</a></li>
                        <li><a href="#" data-filter=".dinner">Dinner</a></li>
                      </ol>
                    </li>
                  </ul>
                  <div class="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="portfolio-items">
              <div class="col-sm-6 col-md-4 col-lg-4 breakfast">
                <div class="portfolio-item">
                  <div class="hover-bg"> <a href={portfolio01small} title="Dish Name" data-lightbox-gallery="gallery1">
                    <div class="hover-text">
                      <h4>Dish Name</h4>
                    </div>
                    <img src={portfolio01small} class="img-responsive" alt="Project Title" /> </a> </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-4 dinner">
                <div class="portfolio-item">
                  <div class="hover-bg"> <a href={portfolio02small} title="Dish Name" data-lightbox-gallery="gallery1">
                    <div class="hover-text">
                      <h4>Dish Name</h4>
                    </div>
                    <img src={portfolio02small} class="img-responsive" alt="Project Title" /> </a> </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-4 breakfast">
                <div class="portfolio-item">
                  <div class="hover-bg"> <a href={portfolio03small} title="Dish Name" data-lightbox-gallery="gallery1">
                    <div class="hover-text">
                      <h4>Dish Name</h4>
                    </div>
                    <img src={portfolio03small} class="img-responsive" alt="Project Title" /> </a> </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-4 breakfast">
                <div class="portfolio-item">
                  <div class="hover-bg"> <a href={portfolio04small} title="Dish Name" data-lightbox-gallery="gallery1">
                    <div class="hover-text">
                      <h4>Dish Name</h4>
                    </div>
                    <img src={portfolio04small} class="img-responsive" alt="Project Title" /> </a> </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-4 dinner">
                <div class="portfolio-item">
                  <div class="hover-bg"> <a href={portfolio05small} title="Dish Name" data-lightbox-gallery="gallery1">
                    <div class="hover-text">
                      <h4>Dish Name</h4>
                    </div>
                    <img src={portfolio05small} class="img-responsive" alt="Project Title" /> </a> </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-4 lunch">
                <div class="portfolio-item">
                  <div class="hover-bg"> <a href={portfolio06small} title="Dish Name" data-lightbox-gallery="gallery1">
                    <div class="hover-text">
                      <h4>Dish Name</h4>
                    </div>
                    <img src={portfolio06small} class="img-responsive" alt="Project Title" /> </a> </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-4 lunch">
                <div class="portfolio-item">
                  <div class="hover-bg"> <a href={portfolio07small} title="Dish Name" data-lightbox-gallery="gallery1">
                    <div class="hover-text">
                      <h4>Dish Name</h4>
                    </div>
                    <img src={portfolio07small} class="img-responsive" alt="Project Title" /> </a> </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-4 breakfast">
                <div class="portfolio-item">
                  <div class="hover-bg"> <a href={portfolio08small} title="Dish Name" data-lightbox-gallery="gallery1">
                    <div class="hover-text">
                      <h4>Dish Name</h4>
                    </div>
                    <img src={portfolio08small} class="img-responsive" alt="Project Title" /> </a> </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-4 dinner">
                <div class="portfolio-item">
                  <div class="hover-bg"> <a href={portfolio09small} title="Dish Name" data-lightbox-gallery="gallery1">
                    <div class="hover-text">
                      <h4>Dish Name</h4>
                    </div>
                    <img src={portfolio09small} class="img-responsive" alt="Project Title" /> </a> </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-4 lunch">
                <div class="portfolio-item">
                  <div class="hover-bg"> <a href={portfolio10small} title="Dish Name" data-lightbox-gallery="gallery1">
                    <div class="hover-text">
                      <h4>Dish Name</h4>
                    </div>
                    <img src={portfolio10small} class="img-responsive" alt="Project Title" /> </a> </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-4 lunch">
                <div class="portfolio-item">
                  <div class="hover-bg"> <a href={portfolio11small} title="Dish Name" data-lightbox-gallery="gallery1">
                    <div class="hover-text">
                      <h4>Dish Name</h4>
                    </div>
                    <img src={portfolio11small} class="img-responsive" alt="Project Title" /> </a> </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-4 col-lg-4 breakfast">
                <div class="portfolio-item">
                  <div class="hover-bg"> <a href={portfolio12small} title="Dish Name" data-lightbox-gallery="gallery1">
                    <div class="hover-text">
                      <h4>Dish Name</h4>
                    </div>
                    <img src={portfolio12small} class="img-responsive" alt="Project Title" /> </a> </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Team Section --> */}
        <div id="team" class="text-center">
          <div class="overlay">
            <div class="container">
              <div class="col-md-10 col-md-offset-1 section-title">
                <h2>Personal Projects</h2>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
              </div>
              <div id="row">
                <div class="col-md-4 team">
                  <div class="thumbnail">
                    <div class="team-img"><img src={team01} alt="..." /></div>
                    <div class="caption">
                      <h3>Mike Doe</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 team">
                  <div class="thumbnail">
                    <div class="team-img"><img src={team02} alt="..." /></div>
                    <div class="caption">
                      <h3>Chris Doe</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 team">
                  <div class="thumbnail">
                    <div class="team-img"><img src={team03} alt="..." /></div>
                    <div class="caption">
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
        <div id="call-reservation" class="text-center">
          <div class="container">
            <h2>Want to make a reservation? Email <a href="mailto:bdburns6389@gmail.com">bdburns6389@gmail.com</a></h2>
          </div>
        </div>
        {/* <!-- Contact Section --> */}
        <div id="contact" class="text-center">
          <div class="container">
            <div class="section-title text-center">
              <h2>Contact Form</h2>
              <hr />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed.</p>
            </div>
            <div class="col-md-10 col-md-offset-1">
              <form name="sentMessage" id="contactForm" novalidate>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="text" id="name" class="form-control" placeholder="Name" required="required" />
                      <p class="help-block text-danger"></p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="email" id="email" class="form-control" placeholder="Email" required="required" />
                      <p class="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <textarea name="message" id="message" class="form-control" rows="4" placeholder="Message" required></textarea>
                  <p class="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" class="btn btn-custom btn-lg">Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div id="footer">
          <div class="container text-center">
            <div class="col-md-4">
              <h3>Address</h3>
              <div class="contact-item">
                <p>25976 183rd Street,</p>
                <p>Leavenworth Kansas 66048</p>
              </div>
            </div>
            <div class="col-md-4">
              <h3>Further Links</h3>
              <div class="contact-item">
                <p>https://www.linkedin.com/in/bdburns6389</p>
                <p>https://www.github.com/bdburns6389</p>
              </div>
            </div>
            <div class="col-md-4">
              <h3>Contact Info</h3>
              <div class="contact-item">
                <p>Phone: 913.240.5841</p>
                <p>Email: bdburns6389@gmail.com</p>
              </div>
            </div>
          </div>
          <div class="container-fluid text-center copyrights">
            <div class="col-md-8 col-md-offset-2">
              <div class="social">
                <ul>
                  <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
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
