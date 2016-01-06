import React, { Component, PropTypes } from 'react';

export default class Project extends Component {

  render() {
    return (
      <div className="project">
        <p className="project__keywords">
          {this.props.keywords.map((w, i) =>
            <span className="project__keywords_word" key={i}>{w}</span>
          )}
        </p>
        <h3 className="project__title">{this.props.title}</h3>
        <p className="project__desc">{this.props.desc}</p>
      </div>
    );
  }

}
