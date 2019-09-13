import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Smurf from './Smurf';
import { SmurfContext } from '../contexts/SmurfContext';

function App() {
  const [smurfs, setSmurfs] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:3333/smurfs')
      // .then(res => console.log(res))
      .then(res => setSmurfs(res.data))
      .catch(err => console.log(err))
  }, [smurfs])

  return (
    <div className="App">
      {smurfs.map(smurf => 
        <>
          <h2>Name: {smurf.name}</h2>
          <p>Age: {smurf.age}</p>
          <p>Height: {smurf.height}</p>
        </>
        )}
        <Smurf />
    </div>
  );
}

export default App;
