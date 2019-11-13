import React, {useState} from "react"
import {connect} from "react-redux"
import {addSmurf} from "../actions"

const AddSmurfForm = (props) => {
    const [newSmurf, setNewSmurf] = useState({
        name: "",
        age: "",
        height: ""
    })

    const handleSubmit = (e) => {
        props.addSmurf(newSmurf)
        
    }

    const handleChanges = (e) => {
        let name = e.target.name;
        setNewSmurf({ ...newSmurf, [name] : e.target.value})
    }

    return (
        <div className="formCSS">
            <form>
                <input name="name" type="text" placeholder="Smurf's Name" onChange={handleChanges}></input>
                <input name="age" type="text" placeholder="Smurf's Age" onChange={handleChanges}></input>
                <input name="height" type="text" placeholder="Smurf's Height" onChange={handleChanges}></input>
                <button type="submit" onClick={handleSubmit}>Submit Your Smurf !</button>
            </form>
        </div>
    )
}

export default connect(null, {addSmurf})(AddSmurfForm)