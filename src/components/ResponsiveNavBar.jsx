
import React, { Component } from 'react';

import ResponsiveMenu from 'react-responsive-navbar';

class Example extends Component {
  render() {
    return (
      <ResponsiveMenu
        menuOpenButton={<div />}
        menuCloseButton={<div />}
        changeMenuOn="500px"
        largeMenuClassName=""
        smallMenuClassName="small-menu-classname"
        menu={
          <ul className='nav navbar-nav navbar-right'>
          <li><a href="#about" className="page-scroll">{this.props.navbarItems[0]}</a></li>
              <li><a href="#restaurant-menu" className="page-scroll">{this.props.navbarItems[1]}</a></li>
              <li><a href="#team" className="page-scroll">{this.props.navbarItems[2]}</a></li>
              <li><a href="#call-reservation" className="page-scroll">{this.props.navbarItems[3]}</a></li>
          </ul>
        }
      />
    );
  }
}

export default Example;