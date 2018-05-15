import React, { Component } from 'react';


class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <div className="container text-center">
                    <div className="col-md-4">
                        <h3>Address</h3>
                        <div className="contact-item">
                            <p>{this.props.address[0]},</p>
                            <p>{this.props.address[1]}</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h3>Further Links</h3>
                        <div className="contact-item">
                            <p><a href={this.props.linkedIn}>{this.props.linkedIn}</a></p>
                            <p><a href={this.props.github}>{this.props.github}</a></p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h3>Contact Info</h3>
                        <div className="contact-item">
                            <p>Phone: {this.props.phone}</p>
                            <p>Email: {this.props.email}</p>
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