import React from 'react';
import { connect } from 'react-redux';

const Two = ({ currentState }) => {
  return <h1>{currentState}</h1>;
};

const mapStateToProps = (state) => ({
  currentState: state.currentState,
});

export default connect(mapStateToProps)(Two);
