import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Sightings extends Component {
  render() {
    return(
      <div className="Sightings">
        <h2>Sightings</h2>
        <p>order: { this.props.order } </p>
        <p>filter: { this.props.filter }</p>
      </div>
    );
  }
}

Sightings.defaultProps = {
  order: 'latest',
  filter: ''
};

Sightings.propTypes = {
  order: PropTypes.string.isRequired,
  filter: PropTypes.string
};

export default Sightings;
