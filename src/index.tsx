import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import SimpleBlackJack from './components/SimpleBlackJack';
import registerServiceWorker from './registerServiceWorker';
import './css/base.css';
import './css/enhanced.css';

// var store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider>
    <SimpleBlackJack localStorage={window.localStorage || null} />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
