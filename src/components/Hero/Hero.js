import React, { Component } from 'react';
import logo from '../../logo.svg';
import picture from '../../picture.jpg';

class Hero extends Component {
  render() {
    const { basics } = this.props.resumeObj;
    return (
      <div className="hero">
        <img className="hero__image" src={picture} alt="This is me!"/>
        <div className="hero__content">
          <h1 className="hero__header">{basics.name}</h1>
          <h4 className="hero__subheader">
            {basics.location.city} <span role="img" aria-label="sun">☀️</span>
          </h4>
          <p className="hero__summary">{basics.summary}</p>
          {
            basics.pdf ? <p className="hero__text"><a href={basics.pdf}><span className="hero__bold">PDF version</span></a> of the resume.</p> : ''
          }
          <div className="hero__link">
            <a href="https://github.com/inesantos29/react-resume" target="_blank">
              <span className="hero__bold">made with</span>
              <img src={logo} className="hero__logo" alt="Made With React Logo"/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;





