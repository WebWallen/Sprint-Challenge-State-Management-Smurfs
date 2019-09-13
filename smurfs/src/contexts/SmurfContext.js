import { createContext } from 'react';

const smurfData = {
    name: "", 
    age: 0,
    height: ""
  }

export const SmurfContext = createContext(smurfData);