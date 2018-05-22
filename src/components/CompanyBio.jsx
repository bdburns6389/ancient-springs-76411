import React, { Component } from 'react';


class CompanyBio extends Component {
    render() {
        return (
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
        );
    };
};

export default CompanyBio;