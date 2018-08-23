import React, { Component } from 'react';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import Nav from './components/Nav/Nav';
import SearchBar from './components/SearchBar/SearchBar';
import VideoDetail from './components/VideoDetail/VideoDetail';
import VideoList from './components/VideoList/VideoList';
import './App.css';

const API_KEY = 'AIzaSyDvvYhIc4XZR8YlTN_s58OgmPMkdKEp5cs';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  searchVideoHandler = term =>
    YTSearch({ key: API_KEY, term }, videos =>
      this.setState({ videos, selectedVideo: videos[0] }),
      console.log(term)
    );

  render() {
    return (
      <div className="App">
        <Nav>
          <SearchBar onSearchVideos={_.debounce(this.searchVideoHandler, 433)} />
        </Nav>
        <VideoDetail video={this.state.selectedVideo}>
          <VideoList videos={this.state.videos}
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })} />
        </VideoDetail>
      </div>
    );
  }
}

export default App;
