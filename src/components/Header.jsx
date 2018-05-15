import React, { Component } from 'react';


class Header extends Component {
    render() {
        return (
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
        );
    };
};

export default Header;