import React from 'react';
import { connect } from 'react-redux'; // You must import { connect } in order to map state to props

const Smurf = props => { // Props passed in from state on MSTP
    console.log("Props from Smurf", props);

    return (
        <div className="smurfs">
            {props.smurfs.map(smurf =>  // Notice this is equivalent to "smurfs" on msTP (saying = .map must match const map)
            <div className="smurf" key={smurf.id}>
               <h2>Name: {smurf.name}</h2>  
               <p>Age: {smurf.age}</p>
               <p>Height: {smurf.height} CM</p>
            </div>
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
       smurfs: state.smurfs // Notice this is equivalent to "smurfs" on .map
    }
}

export default connect(mapStateToProps, {})(Smurf)