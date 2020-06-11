import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import appReducer from './reducers/appReducer';
import  rootSaga from './sagas/appSaga';
import Dashboard from './Dashboard'
import './App.css';

const sagaMiddlware = createSagaMiddleware();
let store = createStore(appReducer, applyMiddleware(sagaMiddlware));
sagaMiddlware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <div>
        <header className="App-header">
          <h1>
            Order Book
          </h1>
        </header>
        <Dashboard/>
      </div>
    </Provider>
  );
}

export default App;
