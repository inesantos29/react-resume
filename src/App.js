import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import { Hero } from './components/Hero';
import { SkillList } from './components/SkillList';
import { Card } from './components/Card';
import { Education } from './components/Education';
import { Contact } from './components/Contact';

import './App.css';

class App extends Component {
  render() {
    const resume = this.props.resumeJson;
    return (
      <Router>
        <div className="App">
          <Hero resumeObj={resume}/>
        </div>
      </Router>
    );
  }
}

export default App;
