import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Menu } from './components/Menu';
import { Video } from './components/Video';

const VIDEOS = {
  fast: "https://content.codecademy.com/courses/React/react_video-fast.mp4",
  slow: "https://content.codecademy.com/courses/React/react_video-slow.mp4",
  cute: "https://content.codecademy.com/courses/React/react_video-cute.mp4",
  eek: "https://content.codecademy.com/courses/React/react_video-eek.mp4",
};


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { src: VIDEOS.fast };
    this.changeState = this.changeState.bind(this);
  }
  changeState(newVideo){
    this.setState({
      src: VIDEOS[newVideo]
    });
  }

  render() {
    return (
      <div>
        <Menu onClick={this.changeState}/>
        <Video src={this.state.src} />
      </div>
    );
  }
}

export default App;
