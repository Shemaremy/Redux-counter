import React from 'react';
import { connect } from 'react-redux';  // Connect function to connect React components to the Redux store.


const mapStateToProps = (state) => ({   // The function takes state as an argument, which represents the entire Redux state.
    currentState: state.currentState,
  });



const One = ({ currentState }) => {     // This functional component accepts currentState as a prop.
  return <h1>{currentState}</h1>;
};



export default connect(mapStateToProps)(One);  // This function takes state as an argument, which represents the entire Redux state.
