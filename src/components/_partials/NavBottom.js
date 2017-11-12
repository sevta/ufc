import React , { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBottom extends Component {
  render() {
    return (
      <div className='nav-bottom'>
        <div className="nav-link">
          <Link to='/'>Events</Link>
        </div>
        <div className="nav-link">
          <Link to='/movie'>Movie</Link>
        </div>
      </div>
    )
  }
}
