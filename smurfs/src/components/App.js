import React, { useState, useEffect } from 'react';
import '../index.css';
import { connect } from 'react-redux';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';
import { getSmurfs } from '../actions/index';

const App = ({ smurfs, getSmurfs }) => { // notice the ({ syntax }) matches what's coming from getSmurfs in actions/dispatch

  const [state, setState] = useState({name: "", age: "", height: ""}); // don't forget you can combine state/effect with new concepts
  console.log('Smurfs from app', smurfs);

  useEffect(() => {
    setState(smurfs)
  }, [getSmurfs] ) // only run the effect when there is a new call to getSmurfs function

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