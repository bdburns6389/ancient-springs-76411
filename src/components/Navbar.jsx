import React, { Component } from 'react';


class Navbar extends Component {
    render() {
        return (
            <nav id="menu" className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
                        <a className="navbar-brand page-scroll" href="#page-top">{this.props.name}</a>
                    </div>
                    {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#about" className="page-scroll">{this.props.navbarItems[0]}</a></li>
                            <li><a href="#restaurant-menu" className="page-scroll">{this.props.navbarItems[1]}</a></li>
                            <li><a href="#team" className="page-scroll">{this.props.navbarItems[2]}</a></li>
                            <li><a href="#call-reservation" className="page-scroll">{this.props.navbarItems[3]}</a></li>
                        </ul>
                    </div>
                    {/* <!-- /.navbar-collapse --> */}
                </div>
            </nav>
        );
    };
};

export default Navbar;