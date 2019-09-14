import React, { useState, useEffect } from 'react';
import '../index.css';
import { connect } from 'react-redux';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';
import { getSmurfs } from '../actions/index';

const App = ({ smurfs, getSmurfs }) => {

  const [state, setState] = useState({ name: "", age: "", height: "" });
  // console.log('Smurfs from app', smurfs);



  useEffect(() => {
    setState(smurfs)
  }, [getSmurfs])

  return (
    <div className="App">
      <SmurfForm />
      <Smurf />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { getSmurfs })(App);