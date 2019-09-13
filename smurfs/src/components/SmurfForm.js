import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/index';

const SmurfForm = (props) => {
    console.log(props);

    const [state, setState] = useState("");

    const smurfHandler = (e) => {
        e.preventDefault();
        props.addSmurf(state);
        console.log(state);
    }

    const inputHandler = (e) => {
        console.log(e.target.value);
        setState(e.target.value);
    }

    return (
        <div>
            <form onSubmit={(e) => {smurfHandler(e)}}>
                <input type="text" name="name" onChange={inputHandler} />
                <input type="number" name="age" onChange={inputHandler} />
                <input type="text" name="height" onChange={inputHandler} />
                <button type="submit">Add Smurf!</button>
            </form>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, {addSmurf})(SmurfForm);