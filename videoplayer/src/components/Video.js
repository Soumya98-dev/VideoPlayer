import React from 'react';
import { App } from '../App';

export class Video extends React.Component {
  render() {
    return (
      <div>
        <video src={this.props.src} controls autostart autoPlay muted/>
      </div>
    )
  }
}
