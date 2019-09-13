import React from 'react';
import '../index.css';
import { connect } from 'react-redux';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';

function App() {
  return (
    <div className="App">
      <Smurf />
      <SmurfForm />
    </div>  
  )
}

export default App;