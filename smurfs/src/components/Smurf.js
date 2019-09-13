import React, { useContext } from 'react';
import { SmurfContext } from '../contexts/SmurfContext';

function Smurf() {
    const smurf = useContext(SmurfContext);

    return (
        <div className="smurf">

        </div>
    );
}

export default Smurf;