import React, { Component, PropTypes } from 'react';
import Project from './Project';

export default class Section extends Component {

  render() {
    return (
      <section className="section">
        <h2 className="section__header">{this.props.header}</h2>
        <div className="section__body">
          {this.props.projects.map((p, i) => <Project key={i} {...p} />)}
        </div>
      </section>
    );
  }

}
