import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SimpleBlackJack from './SimpleBlackJack';
import registerServiceWorker from './registerServiceWorker';
import './css/base.css';
import './css/enhanced.css';

ReactDOM.render(
  <SimpleBlackJack />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
