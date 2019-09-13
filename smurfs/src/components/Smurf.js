import React, { useState, useContext } from 'react';
import { SmurfContext } from '../contexts/SmurfContext';
// import axios from 'axios';

function Smurf() {
    const smurf = useContext(SmurfContext);
    console.log(smurf);
    console.log(smurf.name);

    const [input, setInput] = useState("");

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        
    }

    return (
        <div className="smurf">
            <form onSubmit={handleSubmit}>
                <input type="text" name={smurf.name} placeholder="name" onChange={handleChange} value={input} />
                <input type="number" name={smurf.age} placeholder="age" onChange={handleChange} />
                <input type="text" name={smurf.height} placeholder="height" onChange={handleChange} />
                <button type="submit">Submit!</button>
            </form>
        </div>
    );
}

export default Smurf;