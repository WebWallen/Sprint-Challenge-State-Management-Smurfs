import { createContext } from 'react';

const smurf = {
    name: "", 
    age: 0,
    height: ""
  }

export const SmurfContext = createContext(smurf);