import React, { useEffect } from 'react';
import SmurfCard from '../components/SmurfCard';
import { fetchData } from '../actions';
import { connect } from 'react-redux';

const SmurfList = props => {
    useEffect(()=> {
        props.fetchData()
    }, []);
    if (props.isFetching){
        return (
        <div>
        <h2>"loading...."</h2>
        </div>
        )
    }
    return (
        <div>
            {console.log(props)}
            {props.smurfData.map(data => (
                <SmurfCard key={data.id} name={data.name} height={data.height} age={data.age} />
                
            ))}
        </div>
    )
}

export default connect(
    null,
    { fetchData }
)(SmurfList);