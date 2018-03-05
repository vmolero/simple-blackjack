import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SimpleBlackJack from '../SimpleBlackJack';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SimpleBlackJack />, div);
});
