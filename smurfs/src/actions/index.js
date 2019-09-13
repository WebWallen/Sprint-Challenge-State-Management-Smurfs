export const addSmurf = (smurf) => {
    console.log('smurf', smurf);
    return { type: "ADD_SMURF", payload: smurf }
}