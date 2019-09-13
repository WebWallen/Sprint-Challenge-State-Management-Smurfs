import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/index';

const SmurfForm = (props) => {
    console.log(props);

    const [state, setState] = useState({name: "", age: "", height: ""});

    const smurfHandler = (e) => {
        e.preventDefault();
        props.addSmurf(state);
        console.log(state);
        setState({
            state: ""
        })
    }

    const inputHandler = (e) => {
        // console.log(e.target.value);
        setState({...state, 
            [e.target.name]: e.target.value       
        })
    }

    return (
        <div>
            <form onSubmit={smurfHandler}>
                <input type="text" name="name" onChange={inputHandler} />
                <input type="text" name="age" onChange={inputHandler} />
                <input type="text" name="height" onChange={inputHandler} />
                <button type="submit">Add Smurf!</button>
            </form>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {addSmurf})(SmurfForm);