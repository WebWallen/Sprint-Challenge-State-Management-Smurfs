import React from 'react';
import { connect } from 'react-redux';

const Smurf = (props) => {
    return (
        <>
            <div>I am a smurf.</div>
        </>
    )
}

const mapStateToProps = (state) => {
    return (
       <div>
           
       </div>
    )
}

export default connect(mapStateToProps, {})(Smurf)