import React from "react"
import { connect } from 'react-redux';
import SmurfList from '../components/SmurfList'
import AddSmurfForm from '../components/AddSmurfForm'
import "./App.css";

//components


const App = (props) => {
  
    return (
      <div className="App">
        <SmurfList smurfData={props.smurfData}/>
        <AddSmurfForm />
      </div>
    );
  
}

// export default App;
const mapStateToProps = state => {
  return {
      smurfData: state.smurfData,
     
  }
}

export default connect(
  mapStateToProps,
  {}
)(App);
