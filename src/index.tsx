import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SimpleBlackJack from './components/SimpleBlackJack';
import registerServiceWorker from './registerServiceWorker';
import './css/base.css';
import './css/enhanced.css';

ReactDOM.render(
  <SimpleBlackJack localStorage={window.localStorage || null} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
