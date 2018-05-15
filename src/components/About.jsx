import React, { Component } from 'react';
import about from '../img/about.jpg';


class About extends Component {
    render() {
        return (
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
        );
    };
};

export default About;