import React, { useEffect } from 'react';
import '../index.css';
import { connect } from 'react-redux';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';
import { getSmurfs } from '../actions/index';

const App = ({ getSmurfs }) => { // notice the ({ syntax }) matches what's coming from getSmurfs in actions/dispatch

  useEffect(() => {
    getSmurfs();
  }, [] ) // run the effect when there is a new call to the getSmurfs action, leave dependency array empty so it runs once

  return (
    <div className="App">
      <SmurfForm />
      <Smurf />
    </div>  
  )
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs // Matches the "name" from name/value pair on initial state within the reducers
  }
}

export default connect(mapStateToProps, { getSmurfs })(App); // Pulled in getSmurfs because that's where the Axios.get lives