import React from 'react';
import { connect } from 'react-redux';

const Smurf = props => {
    console.log("Props from Smurf", props);

    return (
        <div className="smurfs">
            {props.smurfs.map(smurf => 
            <div className="smurf" key={smurf.id}>
               <h2>Name: {smurf.name}</h2>  
               <p>Age: {smurf.age}</p>
               <p>Height: {smurf.height}</p>
            </div>
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
       smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {})(Smurf)