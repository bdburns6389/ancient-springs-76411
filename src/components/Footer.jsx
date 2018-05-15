import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Footer extends Component {
    render() {
        return (
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
        );
    };
};

export default Footer;