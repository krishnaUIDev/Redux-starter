import React, { Component } from 'react';
import Search from '../search/search';
import VideoPlayer from '../VideoPlayer/index'
import VideoCard from '../VideoCard/videoCard';
import VideoDetails from '../VideoDetails/VideoDetails';
export default class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <VideoPlayer />
        <VideoCard />
        <VideoDetails />
      </div>
    );
  }
}
