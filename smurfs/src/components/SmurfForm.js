import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/index'; // Pulled in this action because it gets attached to mSTP below.

const SmurfForm = (props) => {
    console.log("Props from SmurfForm", props); // Always console the props to confirm they are correct

    const [state, setState] = useState({name: "", age: "", height: ""}); // Matches source smurf data structure

    const smurfHandler = (e) => { // If it's an event, you've gotta pass in an (e) arg. 
        e.preventDefault();
        props.addSmurf(state);
        console.log("State from smurfHandler", state);
    }

    const inputHandler = (e) => {
        // console.log(e.target.value);
        setState({...state, // Spread in initial state
            [e.target.name]: e.target.value // Targets name/value pairs on initial state.
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
        smurf: state.smurf // "Smurf" because that is what we named the new form submission on axios.POST in actions
    }
}

export default connect(mapStateToProps, {addSmurf})(SmurfForm); // Pulled in addSmurf because that's where the post function lives. 