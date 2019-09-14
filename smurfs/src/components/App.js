import React, { useState, useEffect } from 'react';
import '../index.css';
import { connect } from 'react-redux';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';
import { getSmurfs } from '../actions/index';

const App = ({ smurfs, getSmurf }) => {

  const [state, setState] = useState({name: "", age: "", height: ""});

  useEffect(() => {
    setState(smurfs)
  }, [getSmurf] )

  return (
    <div className="App">
      <Smurf />
      <SmurfForm />
    </div>  
  )
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { getSmurfs })(App);