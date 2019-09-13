import React from 'react';
import { connect } from 'react-redux';

const Smurf = (props) => {
    console.log("Props from Smurf", props);

    return (
        <>
            {props.smurfs.map(smurf => 
            <>
               <h2>{smurf.name}</h2>  
               <p>{smurf.age}</p>
               <p>{smurf.height}</p>
            </>
            )}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
       smurfs: state
    }
}

export default connect(mapStateToProps, {})(Smurf)