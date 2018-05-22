import React, { Component } from 'react';
import team01 from '../img/team/01.png';
// import team02 from '../img/team/02.png';
// import team03 from '../img/team/03.png';


class Portfolio extends Component {
  render() {
    return (
      <div id="team" className="text-center">
        <div className="overlay">
          <div className="container">
            <div className="col-md-10 col-md-offset-1 section-title">
              <h2>Personal Projects</h2>
              <hr />
              <p>Here are some of my personal projects that show my skills!
              </p>
            </div>
            <div id="row">
              <div className="col-md-4 col-md-offset-4 team">
              {/* Get Rid of col-md-offset-4 once there are more divs */}
                <div className="thumbnail">
                  <div className="team-img"><img src={team01} alt="..." /></div>
                  <div className="caption">
                    <h3>Workout Tracker</h3>
                    <p>A simple app that allows the user to create exercises and workouts, and keep daily records for any workout.</p>
                  </div>
                </div>
              </div>
              {/* <div className="col-md-4 team">
                <div className="thumbnail">
                  <div className="team-img"><img src={team02} alt="..." /></div>
                  <div className="caption">
                    <h3>Server-Side Rendering</h3>
                    <p>If you need a little more punch to your website, I also am experienced in back-end 
                        programming.</p>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-md-4 team">
                <div className="thumbnail">
                  <div className="team-img"><img src={team03} alt="..." /></div>
                  <div className="caption">
                    <h3>SQL</h3>
                    <p>Need a little data manipulation?  With MySQL, I can take your data and help you organize 
                        and better understand it.</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default Portfolio;