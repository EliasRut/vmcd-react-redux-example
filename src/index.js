import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { createStore } from 'redux'
import fetchProfessions from './fetchProfessions';

const initialState = {
  activeProfessionId: undefined,
  professions: [],
  apiCallFinished: false
};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'API_LOADED': {
      return {
        ...state,
        professions: action.dataEntries,
        apiCallFinished: true
      };
    }
    case 'UNSET_ACTIVE_PROFESSION': {
      return {
        ...state,
        activeProfessionId: undefined
      };
    }
    case 'SET_ACTIVE_PROFESSION': {
      return {
        ...state,
        activeProfessionId: action.id
      };
    }
  }
  return {...state};
};

const store = createStore(rootReducer);

fetchProfessions(store.dispatch);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
