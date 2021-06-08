import React from 'react';
import Navigation from './Navigation';
import MainContent from './MainContent';
import {connect} from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        {this.props.apiCallFinished ? (
          <MainContent />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}


const makeConnectedComponent = connect((state) => {
  return {
    apiCallFinished: state.apiCallFinished
  };
});
const ConnectedApp = makeConnectedComponent(App);

export default ConnectedApp;
