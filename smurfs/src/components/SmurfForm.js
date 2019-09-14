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
    }

    const inputHandler = (e) => {
        // console.log(e.target.value);
        setState({...state, 
            [e.target.name]: e.target.value       
        })
    }

    return (
        <div>
            <h2>Smurf Village Sign-Up Form</h2>
            <form onSubmit={smurfHandler}>
                <input type="text" name="name" placeholder="What's your name?" onChange={inputHandler} className="input" />
                <input type="text" name="age" placeholder="How old are you (we promise not to tell)?" onChange={inputHandler} className="input"/>
                <input type="text" name="height" placeholder="What's your size in CM (size limit = 100!)?" onChange={inputHandler} className="input"/>
                <button type="submit" className="input">Add Smurf!</button>
            </form>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        smurf: state.smurf
    }
}

export default connect(mapStateToProps, {addSmurf})(SmurfForm);