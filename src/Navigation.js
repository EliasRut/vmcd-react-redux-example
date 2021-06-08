import React from 'react';
import {connect} from 'react-redux';

class Navigation extends React.Component {
  render() {
    return (
      <div className="Navigation">
        {this.props.activeProfession ? (
          <div>Active profession is {this.props.activeProfession.name}</div>
        ) : (
          <div>No Profession selected.</div>
        )}
      </div>
    );
  }
}

const makeConnectedComponent = connect((state) => {
  return {
    activeProfession: state.activeProfessionId ? 
      state.professions.find(
        (profession) => profession.id === state.activeProfessionId) :
      undefined
  };
});
const ConnectedNavigation = makeConnectedComponent(Navigation);

export default ConnectedNavigation;
