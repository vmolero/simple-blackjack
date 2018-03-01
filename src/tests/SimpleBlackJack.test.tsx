import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SimpleBlackJack from '../../src/SimpleBlackJack';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SimpleBlackJack />, div);
});
