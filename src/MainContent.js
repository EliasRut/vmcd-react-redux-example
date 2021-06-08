import React from 'react';
import './MainContent.css';
import Card from './Card.js';
import {connect} from 'react-redux';

class MainContent extends React.Component {
  onCardClick(key) {
    if (this.props.activeProfessionId === key) {
      this.props.dispatch({type: 'UNSET_ACTIVE_PROFESSION'});
    } else {
      this.props.dispatch({type: 'SET_ACTIVE_PROFESSION', id: key});
    }
  }

  render() {
    return (
      <div className="MainContent">
        {this.props.professions.map((entry) => (
          <Card
            isActive={this.props.activeProfessionId === entry.id}
            onClick={() => this.onCardClick(entry.id)}
            title={entry.name}
            imgSrc={entry.icon}
          >
            Weapons:
            <ul>
              {entry.weapons.map((weapon) => (<li>{weapon}</li>))}
            </ul>
          </Card>
        ))}
      </div>
    );
  }
}

const makeConnectedComponent = connect((state) => {
  return {
    activeProfessionId: state.activeProfessionId,
    professions: state.professions
  };
});
const ConnectedMainContent = makeConnectedComponent(MainContent);

export default ConnectedMainContent;
