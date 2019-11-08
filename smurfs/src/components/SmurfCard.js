import React from 'react';

const SmurfCard = (props) => {
    return (
        <div>
    <h2>name: {props.name}</h2>
    <h3>height: {props.height}</h3>
    <h3>age: {props.age}</h3>
    </div>
    )
}

export default SmurfCard