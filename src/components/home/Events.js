import React , { Component } from 'react';
import './Home.css';

class Events extends Component {
  render() {
    return (
      <div>
        <div className="events-container">
          <div className="title">{this.props.events.base_title}</div>
          <div className="time">{this.props.events.event_date}</div>
          <div className="fighters">{this.props.events.title_tag_line}</div>
          <img src={this.props.events.feature_image} alt=""/>
        </div>
      </div>
    )
  }
}

export default Events
