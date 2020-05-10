import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import Introduction from './components/introduction';
import About from './components/about';
import Timeline from './components/timeline';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';
import Blog from './components/blog';

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Introduction></Introduction>
					<About></About>
					<Timeline></Timeline>
          <Skills></Skills>
          <Projects></Projects>
          <Blog></Blog>
          <Contact></Contact>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
